export const landing_header = "Hi! I'm Chujia Guo."

export const landing_description = "Computer Science @ University of Maryland, Baltimore County"

export const landing_paragraph = "I'm a developer with a strong focus on performance and full-stack architecture. I've worked on projects involving TypeScript, Go, and custom APIs — aiming to build software that's fast, maintainable, and user-centered. Check out my projects "

export const resume_coursework = [
    { grade: "A", course: "Discrete Structures" },
    { grade: "B", course: "Data Structures" },
    { grade: "A", course: "Design & Analysis of Algorithms" },
    { grade: "A", course: "Computer Architecture" },
    { grade: "A", course: "Operating Systems" },
    { grade: "In Progress", course: "Software Engineering" },
    { grade: "In Progress", course: "Artificial Intelligence" },
]

export const resume_experience = [
    {
        company: "Guangzhou Quantitative Software Technology Co.", alt: "广州量化软件技术有限公司", position: "Full-Stack Intern", location: "Guangzhou, China", date: "June 2025 - August 2025", description: "Developed and optimized full-stack solutions using Next.js and Go to support portfolio managers with real-time management of over 500 stocks, while significantly improving system performance and user experience.", project: "", notes:
            [
                [
                    "Full-Stack Development",
                    "Built and deployed a client-facing application and corporate website from the ground up, integrating multiple third-party APIs to extend platform capabilities."
                ],
                [
                    "Performance Optimization",
                    "Reduced page and data load times to near-instant and improved internal API response times by ~30%, resulting in faster data access and smoother user interactions."
                ],
                [
                    "API Development",
                    "Designed and optimized backend APIs in Go and JavaScript, enhancing data handling efficiency and supporting seamless integration with external services."
                ],
                [
                    "Real-Time Functionality",
                    "Implemented features that enabled efficient, real-time monitoring and management of stock portfolios for clients."
                ]
            ]
    },
    { company: "BlueBot", alt: "", position: "Founder", location: "Silver Spring, MD", date: "May 2020 - September 2023", description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.", project: "bluebot" },
]

export const projects = [
    {
        id: "bluebot", name: "BlueBot",
        description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, supported upwards of 100,000 daily active users while maintaining high uptime and reliability.",
        github: "https://github.com/ChujiaGuo/pubhallsbot",
        skills:
            [["Node.js", "Framework used to build the application."],
            ["JavaScript", "Primary language of choice for this project"],
            ["Discord.js", "The main library used to interact with the Discord API"],
            ["Java", "Used to write the secondary application that ran processes that required concurrency and efficiency"],
            ["MySQL", "Database used to store and manage user and community data"],
            ["SQLite", "The original database we used, ended up only storing configurations and settings"]
            ]
    },
    {
        id: "webpage", name: "This website!",
        description: "Use this website to get to know me!",
        github: "https://github.com/ChujiaGuo/webpage",
        skills:
            [["Next.js", "The framework used to build this site. Absolute overkill, but fun to use"],
            ["TypeScript", "Language of choice for this project"]]
    },

    {
        id: "WIP", name: "Works in Progress",
        description: "Current projects in progress:",
        skills: [
            ["Portfolio Manager", "An application developed to monitor my personal portfolio across multiple brokerages, as well as allow backtesting and live trading for custom algorithms. Currently using Electron with Typescript for the application, and Python for the backend."]
        ]
    }
]

const experience_placeholder = { company: "", alt: "", position: "", location: "", date: "", description: "", project: "", notes: [] }
const project_placeholder = { id: "", name: "", description: "", github: "", skills: [["", ""]] }