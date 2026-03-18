type Work = {
    title: string;
    description: string;
    href: string;
}
const works: Array<Work> = [
    {
        title: "UniSchool Website",
        description: "The official website for UniSchool, a DX promotion team affiliated with Sanda Gakuen Junior High School, providing information about the team and its activities.",
        href: "/works/unischool"
    },
    {
        title: "ReCoron | Cron as a Service for API Users",
        description: "ReCoron is a cron as a service platform designed for API users, allowing them to schedule and manage their API tasks efficiently without the need for their own server infrastructure.",
        href: "/works/recoron" 
    },
    {
        title: "Renv | Easy Environment Management for Developers",
        description: "Renv is a tool that simplifies environment management for developers, providing an easy-to-use interface for creating, managing, and switching between different development environments.",
        href: "/works/renv"
    },
    {
        title: "Syosetsu Downloader",
        description: "A tool for downloading novels from the Syosetsu website, allowing users to save their favorite stories for offline reading.",
        href: "/works/syosetsu"
    }
]

const Works = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Works</h1>
            <p className="mt-4 text-center text-gray-600">Coming soon...</p>
        </div>
    );
}

export default Works;