<?php
// 定数の定義
const SYOSETSU_API_ENDPOINT = 'https://api.syosetu.com/novelapi/api/';
const KAKUYOMU_NOVEL_ENDPOINT = 'https://kakuyomu.jp/works/';
const IS_DEBUG = false; // デバッグモードのフラグ

// エラー表示に関する設定
if (IS_DEBUG) {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
} else {
    error_reporting(0);
    ini_set('display_errors', '0');
}

// CORS設定
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// OPTIONSリクエストに対する応答
$METHOD = $_SERVER['REQUEST_METHOD'];
if ($METHOD === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($METHOD === 'POST') {
    $content_type = $_SERVER['CONTENT_TYPE'] ?? '';
    $data = [];
    if (strpos($content_type, 'application/json') !== false) {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
    } elseif (strpos($content_type, 'application/x-www-form-urlencoded') !== false) {
        $data = $_POST;
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Unsupported Content-Type'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $provider = $data['provider'] ?? null;
    $url = $data['url'] ?? null;

    // Validate input
    if (!$provider || !$url) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing provider or url'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    if (!in_array($provider, ['syosetsu', 'kakuyomu'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid provider'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // main logic
    if ($provider === 'syosetsu') {
        require_once './syosetsu.php';

        $syosetsu = new Syosetsu($url);
        if (!$syosetsu->isValidUrl()) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid Syosetsu URL'], JSON_UNESCAPED_UNICODE);
            exit;
        }

        try {
            $download_result = $syosetsu->downloadNovel();
            echo json_encode(['file' => $download_result], JSON_UNESCAPED_UNICODE);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to download novel', 'message' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
        }
    } elseif ($provider === 'kakuyomu') {
        require_once './kakuyomu.php';

        $kakuyomu = new Kakuyomu($url);
        if (!$kakuyomu->isValidUrl()) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid Kakuyomu URL'], JSON_UNESCAPED_UNICODE);
            exit;
        }
        try {
            $download_result = $kakuyomu->downloadNovel();
            echo json_encode(['file' => $download_result], JSON_UNESCAPED_UNICODE);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to download novel', 'message' => $e->getMessage()], JSON_UNESCAPED_UNICODE);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Unsupported provider'], JSON_UNESCAPED_UNICODE);
        exit;
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed', "method" => $METHOD], JSON_UNESCAPED_UNICODE);
}