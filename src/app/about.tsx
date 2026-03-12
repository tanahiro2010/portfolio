type HistoryItem = {
    date: string;
    title?: string;
    description?: string;
}
const HISTORY: Array<HistoryItem> = [
    {
        date: '2010-08-18',
        title: '生まれる',
        description: '京都にて産声をあげる'
    },
    {
        date: '2013-04-01',
        title: '兵庫県へ引っ越す',
        description: '親族の引っ越しに伴い、兵庫県へ引っ越す'
    },
    {
        date: '2016-04-04',
        title: '小学校入学',
        description: '兵庫県の小学校へ入学'
    },
    {
        date: '2023-04-01',
        title: '中学校入学',
        description: '三田学園中学校へ入学'
    },
    {
        date: '2023-05-01',
        title: 'Zistyに所属',
        description: 'エンジニアコミュニティZistyに所属し、活動を開始する'
    },
    {
        date: '2024-03-22',
        title: 'セキュリティ・ミニキャンプ in 大阪に参加',
        description: '中学一年生にて、セキュリティ・キャンプミニに参加し、セキュリティについて学ぶ'
    },
    {
        date: '2024-10-02',
        title: 'UniProjectに所属',
        description: 'デジタル創作サークルUniProjectに所属し、活動を開始する'
    },
    {
        date: '2025-04-07',
        title: 'UniSchoolに所属',
        description: '三田学園直属のDX推進チームであるUniSchoolに初期メンバーとして所属',
    },
    {
        date: '2025-06-27',
        title: 'ネオページ書き初めコンテストにて拙作が中間先行を突破',
        description: 'ネオページにおける「第一回ネオページ書き初めコンテスト現代ファンタジー部門」にて、拙作が中間選考を突破し、最終選考へ進む'
    },
    {
        date: '2025-10-01',
        title: '湘南藤沢高専Discordキャンパスに参加',
        description: '湘南藤沢高専のDiscordキャンパスに参加し、交流を深める'
    },
    {
        date: '2025-11-01',
        title: '湘南藤沢高専(コミュニティ)にて学生会副会長に就任',
        description: '湘南藤沢高専にて学生会副会長に就任し、学生会の運営に携わる'
    },
    {
        date: '2026-01-29',
        title: 'カクヨムにおける「第一回GA Webノベルコンテスト」にて、拙作が中間選考を突破',
        description: 'カクヨムにおける「第一回GA Webノベルコンテスト」にて、拙作が中間選考を突破し、最終選考へ進む'
    },
    {
        date: '2026-03-02',
        title: '友人とLLM翻訳システムをコアとするプロジェクトを開発するコミュニティを立ち上げる',
        description: '友人とともに、LLM翻訳システムをコアとするプロジェクトを開発する「Kotobプロジェクト」を立ち上げる'
    },
    {
        date: '2026-04-19',
        title: '三田学園中学校を卒業',
        description: '三田学園中学校を卒業し、次のステップへ進む。僕らの冒険はまだ始まったばかりだ――'
    }
]

const About = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center">About</h1>
            <div className="mt-6">
                { /* シンプルで影を使わない年表スタイル */}
                <ul className="relative border-l-2 border-gray-200">
                    {HISTORY.map((item, index) => (
                        <li key={index} className="mb-8 ml-6 relative">
                            <span className="absolute -left-3 top-4 flex items-center justify-center w-6 h-6 bg-white border-2 border-blue-500 rounded-full">
                                <span className="block w-2 h-2 bg-blue-500 rounded-full"></span>
                            </span>

                            <div className="bg-white border border-gray-100 rounded-lg p-4">
                                <p className="text-sm text-gray-400">{item.date}</p>
                                <h3 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h3>
                                <p className="text-gray-700 mt-2">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default About;