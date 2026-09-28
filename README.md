# tanahiro2010 のポートフォリオ

[Astro](https://astro.build) で作成したポートフォリオサイトです。

デプロイは主に [シンクラウド for フリー](https://xfree.ne.jp) を利用し、
GitHub Actions で `main` ブランチへの push をトリガーに FTP 自動デプロイを行っています。

## 使用技術

- **Astro** — 静的サイトジェネレーター（トップページは JS ゼロで配信）
- **React** — 小説ダウンローダーのみアイランド（`client:load`）として使用
- **Tailwind CSS v4** — `@tailwindcss/vite` 経由
- **TypeScript**
- **PHP + Simple HTML DOM** — スクレイピング用バックエンド（`backend/`）
- **GitHub Actions** — CI/CD

## デザイン

「エディトリアル・ミニマル」を基調としています。

- 温かみのあるペーパー系の背景 × インク（濃墨）のテキスト
- 差し色にバーミリオン（朱）を 1 色だけ使用
- 見出しに serif（Instrument Serif）、本文に Inter
- スクロールに応じたフェードイン（`prefers-reduced-motion` に対応）

## 開発

```bash
bun install       # 依存関係のインストール
bun run dev       # 開発サーバー (http://localhost:4321)
bun run build     # 本番ビルド (dist/)
bun run preview   # ビルド結果のプレビュー
```

## ディレクトリ構成

```
src/
  data/          サイトのコンテンツ（プロフィール・制作物・リンク）
  layouts/       共通レイアウト（<head> / OGP / フォント）
  components/    Header / Footer / SyosetsuDownloader(React)
  pages/
    index.astro          トップページ（Hero / About / Works / Links / Contact）
    404.astro
    works/syosetsu.astro  小説ダウンローダー（noindex・sitemap 除外の隠しページ）
public/          静的アセット（画像・robots.txt・.htaccess）
backend/         PHP バックエンド（スクレイピング API）
```

> 小説ダウンローダー（`/works/syosetsu`）はナビゲーションから隠しており、
> 直リンクを知っている人のみアクセスできます（`noindex` かつ sitemap から除外）。

## ライセンス

This project is licensed under the MIT License.

## 参考記事など

- [GitHub Actions を用いて FTP サーバーへ自動 Deploy する方法](https://qiita.com/hoshimado/items/e2073b7a6d40a23cfb55)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [PHP でスクレイピングしてみる (Simple HTML DOM Parser 使用)](https://qiita.com/sueasen/items/9ff63c3ff67312f88dfb)
- [Simple HTML DOM Parser Docs](https://simplehtmldom.sourceforge.io/)
