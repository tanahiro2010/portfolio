<?php
class Http {
    public static function sendPostRequest(string $url, array $data, array $headers): array {
        $headers_string = '';
        foreach ($headers as $key => $value) {
            $headers_string .= "$key: $value\r\n";
        }
        $options = [
            'http' => [
                'header'  => "Content-Type: application/json\r\n" . $headers_string,
                'method'  => 'POST',
                'content' => json_encode($data, JSON_UNESCAPED_UNICODE),
            ],
        ];
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) {
            return ['error' => 'Request failed'];
        }
        return json_decode($result, true);
    }

    public static function sendGetRequest(string $url, array $headers): array {
        $headers_string = '';
        foreach ($headers as $key => $value) {
            $headers_string .= "$key: $value\r\n";
        }
        $options = [
            'http' => [
                'header'  => $headers_string,
                'method'  => 'GET',
            ],
        ];
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) {
            return ['error' => 'Request failed'];
        }
        return json_decode($result, true);
    }
}