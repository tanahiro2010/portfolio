import { useCallback } from "react";

const API_ENDPOINT = "/api/syosetsu";

const Syosetsu = () => {
    const getProviderType = useCallback((url: string): "kakuyomu" | "syosetsu" | null => {
        if (/^https?:\/\/(www\.)?kakuyomu\.jp\/.+/.test(url)) {
            return "kakuyomu";
        } else if (/^https?:\/\/ncode.syosetsu\.com\/.+/.test(url)) {
            return "syosetsu";
        } else {
            return null;
        }
    }, [])
    const handleDownload = useCallback(async (data: FormData) => {
        const url = data.get("url") as string;
        if (!url) return;

        const provider = getProviderType(url);
        if (!provider) {
            alert("URLがKakuyomuまたは小説家になろうの形式ではありません。");
            return;
        }

        const payload: { url: string, provider: "kakuyomu" | "syosetsu" } = { 
            url,
            provider: provider
        };
        try {
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errorData = await response.json();
                alert(`ダウンロードに失敗しました: ${errorData.error}`);
                return;
            }
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = `${provider}-novel.zip`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            alert(`ダウンロード中にエラーが発生しました: ${(error as Record<string, string>).message}`);
        }
        
        return;
    }, []);
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 font-sans text-black">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase border-b-4 border-black pb-4 mb-8">
                Syosetsu Downloader
            </h1>
            
            <form action={handleDownload} className="space-y-8">
                <div>
                    <label htmlFor="url" className="block text-xl font-bold mb-4">
                        Novel URL
                    </label>
                    <div>
                        <input 
                            type="text" 
                            name="url" 
                            id="url" 
                            className="block w-full text-lg p-4 border-4 border-black bg-white text-black rounded-none focus:outline-none focus:bg-gray-100 transition-colors" 
                            placeholder="Kakuyomu or Syosetsuka ni Narou URL"
                            required
                        />
                    </div>
                </div>

                <div>
                    <button 
                        type="submit" 
                        className="inline-block w-full md:w-auto px-12 py-4 border-4 border-black text-xl font-black bg-black text-white hover:bg-white hover:text-black transition-colors rounded-none focus:outline-none uppercase tracking-widest"
                    >
                        Download
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Syosetsu;