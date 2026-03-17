import { useMemo } from "react";
import Table from "@/components/ui/table";

type HistoryItem = {
    date: string;
    title: string;
    description: string;
}
const HISTORY: Array<HistoryItem> = [
    {
        date: '2010-08-18',
        title: 'Born',
        description: 'Born in Kyoto, Japan'
    },
    {
        date: '2013-04-01',
        title: 'Moved to Hyogo',
        description: 'Relocated to Hyogo Prefecture with my family'
    },
    {
        date: '2016-04-04',
        title: 'Entered Elementary School',
        description: 'Started elementary school in Hyogo Prefecture'
    },
    {
        date: '2023-04-01',
        title: 'Entered Junior High School',
        description: 'Enrolled at Sanda Gakuen Junior High School'
    },
    {
        date: '2023-05-01',
        title: 'Joined Zisty',
        description: 'Began activities as a member of the engineering community Zisty'
    },
    {
        date: '2024-03-22',
        title: 'Participated in Security Camp Mini in Osaka',
        description: 'Attended Security Camp Mini as a first-year junior high school student and studied cybersecurity'
    },
    {
        date: '2024-10-02',
        title: 'Joined UniProject',
        description: 'Joined the digital creative circle UniProject and began participating in its activities'
    },
    {
        date: '2025-04-07',
        title: 'Joined UniSchool',
        description: 'Became a founding member of UniSchool, the DX promotion team affiliated with Sanda Gakuen'
    },
    {
        date: '2025-06-27',
        title: 'Passed the Midterm Selection in the NeoPage Writing Contest',
        description: 'My work passed the midterm selection in the 1st NeoPage New Year Writing Contest (Modern Fantasy category) and advanced to the final round'
    },
    {
        date: '2025-10-01',
        title: 'Joined the Shonan Fujisawa Kosen Discord Campus',
        description: 'Joined the Shonan Fujisawa Kosen Discord Campus and started engaging with the community'
    },
    {
        date: '2025-11-01',
        title: 'Appointed Vice President of the Student Council',
        description: 'Appointed Vice President of the Student Council in the Shonan Fujisawa Kosen community and contributed to its management'
    },
    {
        date: '2026-01-29',
        title: 'Passed the Midterm Selection in the GA Web Novel Contest',
        description: 'My work passed the midterm selection in the 1st GA Web Novel Contest on Kakuyomu and advanced to the final round'
    },
    {
        date: '2026-03-02',
        title: 'Founded the Kotob Project',
        description: 'Co-founded the Kotob Project, a community focused on developing projects centered around an LLM-based translation system'
    },
    {
        date: '2026-03-14',
        title: 'Participated in Security Camp Mini in Osaka',
        description: 'Attended Security Camp Mini again as a third-year junior high school student, learning advanced topics such as build system optimization and CTF challenges'
    },
    {
        date: '2026-04-19',
        title: 'Graduated from Junior High School',
        description: 'Graduated from Sanda Gakuen Junior High School and moved on to the next stage. The adventure has only just begun.'
    }
];

const About = () => {
    const history = useMemo<Array<HistoryItem>>(() => [...HISTORY].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ), []);
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center">About</h1>
            <div className="flex md:flex-row flex-col mt-6 gap-4">
                <div className="w-full md:w-1/2 md:max-h-[60vh] md:overflow-auto md:pr-2"> { /* 自己紹介セクション */}
                    <div>
                        <h2 className="text-3xl">Self-introduction</h2>
                        <p className="mt-4 text-gray-700">
                            {/* こんにちは、私はtanahiro2010と申します。シナリオライターやソフトウェア開発者として活動しています。<br />
                            憧れを文章に表すこと、そして技術を駆使して創造的なプロジェクトに取り組むことが大好きです。<br />
                            これまでの経験を活かし、創造的なプロジェクトに取り組んでいきたいと思っています。 */}
                            Hello, I'm tanahiro2010. I'm a scenario writer and software developer. <br />
                            I love expressing admiration through writing and using technology to work on creative projects. <br />
                            I hope to leverage my experiences to continue working on creative endeavors.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl">Teams</h2>
                        <Table headers={["Name", "Description"]} items={[
                            ["Zisty", "Community for Engineers"],
                            ["UniProject", "Circle for Digital creation"],
                            ["UniSchool", "DX promotion team directly under Sanda Gakuen"],
                            ["Kotob", "Community for developing projects with LLM translation system as core"],
                            ["SF-Kosen", "Shonan Fujisawa Kosen of Technology, where I am a student and also serve as the vice president of the student council"],
                        ]} />
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl">Skills</h2>
                        <ul className="mt-4 list-disc list-inside mt-4 text-gray-700">
                            <li>Scenario Writing: Crafting narratives, developing characters, and writing dialogue</li>
                            <li>Software Development: Building projects using technologies such as Python, Ruby, JavaScript, TypeScript, and React, Nextjs</li>
                            <li>Communication: Strong collaboration and client communication skills</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 md:max-h-[60vh] md:overflow-auto md:pl-2"> { /* 活動歴セクション */}
                    <h2 className="text-3xl">Experiences</h2>
                    <ul className="mt-4 relative border-l-2 border-gray-200">
                        {history.map((item, index) => (
                            <li key={index} className="mb-8 ml-6 relative">
                                <span className="absolute -left-3 top-4 flex items-center justify-center w-6 h-6 bg-white border-2 border-blue-500 rounded-full">
                                    <span className="block w-2 h-2 bg-blue-500 rounded-full"></span>
                                </span>

                                <div className="bg-white border border-gray-100 rounded-lg p-4">
                                    <time className="text-sm text-gray-400" dateTime={item.date}>{item.date}</time>
                                    <h3 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h3>
                                    <p className="text-gray-700 mt-2">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default About;