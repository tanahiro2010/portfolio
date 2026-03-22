<?php
require_once '../http.php';

const KAKUTOMU_WORKS_URL = 'https://kakuyomu.jp/works/';

class Kakuyomu
{
    private string $novel_url;
    private string $novel_id;
    private array  $headers = [
        "User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    ];
    public function __construct(string $url)
    {
        $this->novel_url = $url;
        $id = $this->getNovelId($url);
        if ($id === null) {
            throw new InvalidArgumentException('Invalid Kakuyomu URL');
        }
        $this->novel_id = $id;
    }

    private function getNovelId(string $url): ?string
    {
        // URLから小説IDを抽出するロジックを実装
        // 例: https://kakuyomu.jp/works/1234567890 の場合、1234567890 を抽出
        // 対応: http/https と末尾のスラッシュを許容
        $pattern = '#https?://kakuyomu\.jp/works/(\d+)(?:/|$)#';
        if (preg_match($pattern, $url, $matches)) {
            return $matches[1];
        }
        return null;
    }

    private function getNovelContent(DOMDocument $parser): string
    {
        // DOMDocumentから小説の内容を抽出するロジックを実装
        // 例: 小説の内容が特定のクラスやIDを持つ要素に含まれている場合、その要素からテキストを抽出
        $content = "";
        $elements = $parser->getElementsByTagName('div');
        foreach ($elements as $element) {
            if ($element->getAttribute('class') === 'widget-episodeBody js-episode-body') {
                $content .= $element->textContent . "\n\n";
            }
        }
        return $content;
    }

    public function isValidUrl(): bool
    {
        return !empty($this->novel_id);
    }

    public function downloadNovel(string $path): string
    {
        try {
            $response = Http::sendGetRequest($this->novel_url, $this->headers);
            if ($response['status'] !== 200) {
                throw new Exception('Failed to fetch novel page');
            }
        } catch (Exception $e) {
            throw new Exception('Failed to fetch novel page: ' . $e->getMessage());
        }


        // 初期idを取得
        $parser = new DOMDocument();
        $parser->loadHTML($response['body']);
        $page_json = json_decode($parser->getElementById('__NEXT_DATA__')->textContent, true);
        if (!$page_json) {
            throw new Exception('Failed to parse novel page');
        }
        $novel_data = $page_json['props']['pageProps']['__APOLLO_STATE__']["Work:$this->novel_id"];
        $url = $this->novel_url . '/episodes/' . str_replace('Episode:', '', $novel_data['firstPublicEpisodeUnion']['__ref']);

        $episode_no = 1;
        $text = "";

        while (true) {
            try {
                $response = Http::sendGetRequest($url, $this->headers);
                if ($response['status'] !== 200) {
                    throw new Exception('Failed to fetch episode page');
                }
            } catch (Exception $e) {
                throw new Exception('Failed to fetch episode page: ' . $e->getMessage());
            }

            $parser = new DOMDocument();
            $parser->loadHTML($response['body']);
            $text .= "\n\n-- Episode $episode_no --\n\n" . $this->getNovelContent($parser);

            $next = $parser->getElementById("contentMain-readNextEpisode");
            if ($next) {
                $url = "https://kakuyomu.jp" . $next->getAttribute("href");
                $episode_no++;
            } else {
                $filePath = $path . $this->novel_id . ".txt";
                file_put_contents($filePath, $text);
                return $this->novel_id;
            }
        }
    }
}
