<?php
require_once '../http.php';
require_once '../html.php';

const SYOSETSU_API_ENDPOINT = 'https://api.syosetu.com/novelapi/api';
const SYOSETSU_CONTENT_ENDPOINT = 'https://ncode.syosetu.com/';

class Syosetsu {
    private string $novel_url;
    private string $novel_code;
    private array  $headers = [
        'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    ];

    public function __construct(string $novel_url)
    {
        $this->novel_url = $novel_url;
    }

    private function getNovelInfo(): ?array
    {
        $api_url = SYOSETSU_API_ENDPOINT . '?ncode=' . $this->novel_code . '&out=json';
        $response = Http::sendGetRequest($api_url, $this->headers);
        if ($response['status'] !== 200) {
            return null;
        }
        $data = json_decode($response['body'], true);
        if (empty($data)) {
            return null;
        }

        return $data;
    }

    private function getNovelContent(DOMDocument $parser): string
    {
        $content = '';
        $elements = $parser->getElementsByTagName('div');
        foreach ($elements as $element) {
            if ($element->getAttribute('class') === 'p-novel__body') {
                $content .= $element->textContent . "\n\n";
            }
        }
        return $content;
    }

    public function isValidUrl(): bool
    {
        $pattern = '/https?:\/\/ncode\.syosetu\.com\/([a-zA-Z0-9]+)\/?/';
        if (preg_match($pattern, $this->novel_url, $matches)) {
            $this->novel_code = $matches[1];
            return true;
        }
        return false;
    }

    public function downloadNovel(string $path): string
    {
        $novel_info = $this->getNovelInfo();
        if (!$novel_info) {
            throw new Exception('Failed to fetch novel info, ncode: ' . $this->novel_code . ", " . json_encode($novel_info, JSON_UNESCAPED_UNICODE));
        }
        // echo json_encode($novel_info, JSON_UNESCAPED_UNICODE);

        $content = '';
        for ($i = 0; $i <= $novel_info['general_all_no']; $i++) {
            $chapter_url = SYOSETSU_CONTENT_ENDPOINT . $this->novel_code . '/' . $i + 1;
            $response = Http::sendGetRequest($chapter_url, $this->headers);
            if ($response['status'] !== 200) {
                continue; // エピソードの取得に失敗した場合はスキップ
            }

            $parser = new DOMDocument();
            $parser->loadHTML($response['body']);
            $content .= "\n\n-- Episode $i --\n\n" . $this->getNovelContent($parser);
        }

        file_put_contents($path . $this->novel_code . '.txt', $content);
        return $this->novel_code;
    }
}