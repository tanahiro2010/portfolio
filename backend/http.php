<?php
class Http {
    private static function buildHeaders(array $headers): array {
        $out = [];
        foreach ($headers as $key => $value) {
            $out[] = "$key: $value";
        }
        return $out;
    }

    public static function sendRequest(string $method, string $url, array $data = [], array $headers = []): array {
        if ($method === 'POST') {
            return self::sendPostRequest($url, $data, $headers);
        } else {
            return self::sendGetRequest($url, $headers);
        }
    }

    public static function sendPostRequest(string $url, array $data, array $headers = []): array {
        $ch = curl_init($url);
        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
        $default = ['Content-Type: application/json'];
        $httpHeaders = array_merge($default, self::buildHeaders($headers));

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $json,
            CURLOPT_HTTPHEADER => $httpHeaders,
            CURLOPT_TIMEOUT => 30,
        ]);

        $result = curl_exec($ch);
        if ($result === false) {
            $err = curl_error($ch);
            $ch = null;
            return ['error' => 'Request failed', 'message' => $err];
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $ch = null;

        $decoded = json_decode($result, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            return ['status' => $httpCode, 'body' => $result];
        }
        return $decoded;
    }

    public static function sendGetRequest(string $url, array $headers = []): array {
        $ch = curl_init($url);
        $httpHeaders = self::buildHeaders($headers);

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $httpHeaders,
            CURLOPT_TIMEOUT => 30,
        ]);

        $result = curl_exec($ch);
        if ($result === false) {
            $err = curl_error($ch);
            $ch = null;
            return ['error' => 'Request failed', 'message' => $err];
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $ch = null;

        $decoded = json_decode($result, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            return ['status' => $httpCode, 'body' => $result];
        }
        return $decoded;
    }
}