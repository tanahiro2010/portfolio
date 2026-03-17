import { Link } from "@/components/ui/link";

const Navigate = ({ to }: { to: string }) => {
    window.location.href = to;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Redirecting...</h2>
            <p className="text-center text-gray-600">
                現在リダイレクト中です。 <br />
                リダイレクトされない場合、下のリンクからページへお進みください。
            </p>

            <div className="text-center mt-6">
                <Link href={to}>
                    ページに進む
                </Link>
            </div>
        </div>
    );
}

export { Navigate };