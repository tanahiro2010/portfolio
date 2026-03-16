import { Link } from "@/components/ui/link";
export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">404 - Not Found</h2>
            <p className="text-center text-gray-600">お探しのページは見つかりませんでした。</p>

            <div className="text-center mt-6">
                <Link href="/">
                    ホームに戻る
                </Link>
            </div>
        </div>
    );
}