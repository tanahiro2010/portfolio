<?php
const METHOD = $_SERVER['REQUEST_METHOD'] ?? 'GET';
const TEMP_DIR = __DIR__;

if (METHOD === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if (METHOD === 'GET') {
    $file = $_GET['file'] ?? null;
    if (!$file) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing file parameter'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $file_path = TEMP_DIR . '/' . basename($file);
    if (!file_exists($file_path)) {
        http_response_code(404);
        echo json_encode(['error' => 'File not found'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    readfile($file_path);
    unlink($file_path); // ダウンロード後にファイルを削除
    exit;
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}