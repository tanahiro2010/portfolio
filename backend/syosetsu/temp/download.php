<?php
// 一時的なダウンロード用スクリプト
const TEMP_DIR = __DIR__;

// エラーを非表示にする
error_reporting(0);
ini_set('display_errors', '0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing id parameter'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $file_path = TEMP_DIR . '/' . basename($id . '.txt');
    if (!file_exists($file_path)) {
        http_response_code(404);
        echo json_encode(['error' => 'File not found'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $id . '.txt"');
    readfile($file_path);
    unlink($file_path); // ダウンロード後にファイルを削除
    exit;
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}