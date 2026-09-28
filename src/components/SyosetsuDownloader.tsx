import { useState } from "react";

const API_ENDPOINT = "/api/syosetsu/";

type Provider = "kakuyomu" | "syosetsu";
type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success" };

function detectProvider(url: string): Provider | null {
  if (/^https?:\/\/(www\.)?kakuyomu\.jp\/.+/.test(url)) return "kakuyomu";
  if (/^https?:\/\/ncode\.syosetu\.com\/.+/.test(url)) return "syosetsu";
  return null;
}

export default function SyosetsuDownloader() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const isLoading = status.kind === "loading";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const url = new FormData(form).get("url")?.toString().trim() ?? "";

    if (!url) {
      setStatus({ kind: "error", message: "URLを入力してください。" });
      return;
    }

    const provider = detectProvider(url);
    if (!provider) {
      setStatus({
        kind: "error",
        message: "URLがKakuyomuまたは小説家になろうの形式ではありません。",
      });
      return;
    }
    if (provider === "syosetsu") {
      setStatus({
        kind: "error",
        message: "小説家になろうからのダウンロードは現在サポートされていません。",
      });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, provider }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setStatus({
          kind: "error",
          message: `ダウンロードに失敗しました: ${err.error ?? res.status}`,
        });
        return;
      }

      const data = await res.json();
      const a = document.createElement("a");
      a.href = `${API_ENDPOINT}temp/download.php?id=${data.id}`;
      a.download = `${data.id}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setStatus({ kind: "success" });
    } catch (error) {
      setStatus({
        kind: "error",
        message: `エラーが発生しました: ${(error as Error).message}`,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="url" className="mb-2 block text-sm font-medium">
          Novel URL
        </label>
        <input
          type="url"
          name="url"
          id="url"
          inputMode="url"
          autoComplete="off"
          placeholder="https://kakuyomu.jp/works/..."
          required
          className="w-full border border-[#ded8cb] bg-transparent px-4 py-3 text-base text-[#17160f] outline-none transition-colors placeholder:text-[#6d685c] focus:border-[#17160f]"
        />
        <p className="mt-2 text-sm text-[#6d685c]">
          現在サポートしているのは Kakuyomu の作品ページです。
        </p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2 bg-[#17160f] px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#f6f4ee] transition-colors hover:bg-[#c8452f] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Downloading…" : "Download"}
      </button>

      {status.kind === "error" && (
        <p
          role="alert"
          className="border-l-2 border-[#c8452f] bg-[#c8452f]/5 px-4 py-3 text-sm text-[#c8452f]"
        >
          {status.message}
        </p>
      )}
      {status.kind === "success" && (
        <p
          role="status"
          className="border-l-2 border-[#17160f] bg-[#17160f]/5 px-4 py-3 text-sm"
        >
          ダウンロードが完了しました。
        </p>
      )}
    </form>
  );
}
