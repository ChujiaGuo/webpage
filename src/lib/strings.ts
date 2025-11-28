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

export const skills = {
    "languages": ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Go"],
    "frameworks": ["Next.js", "React.js", "Node.js", "Electron", "Pandas", "NumPy"],
    "tools": ["AWS", "Azure", "Git", "Github", "Docker"],
    "databases": ["SQL Server", "MySQL", "SQLite", "S3"],
}

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
    {
        company: "BlueBot", alt: "", position: "Founder", location: "Silver Spring, MD", date: "May 2020 - September 2023", description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.", project: "bluebot", notes: [
            [
                "Team Leadership and Management",
                "Led and worked with a team of 10 developers to build and optimize our system with Git, Docker, and Slack for streamlined communication and development."
            ],
            [
                "Task Optimization and Automation",
                "Automated 75+ tasks across AWS, with reduced response and operating times by 30%."
            ],
            [
                "Artificial Intelligence Integration",
                "Integrated custom trained AI models designed to recognize broad behavioral patterns in consenting users."
            ],
            [
                "Real-Time Functionality",
                "Developed REST APIs, and integrated OAuth2 to provide users with real-time services, maintain secure authentication, while maintaining an uptime of over 99.9%."
            ]
        ]
    },
]

export const projects = [
    {
        id: "classic", name: "Classic",
        description: "AI-integrated tool for students to efficiently manage their semester schedules. No more digging through Blackboard or Canvas for due dates and course info. Classic uses AI to parse syllabuses and schedules, centralizing all relevant information securely and reliably.",
        github: "https://github.com/ChujiaGuo/classic",
        skills:
            [["Next.js with TypeScript", "Provides a fast, modern framework for building the frontend, UI, and UX."],
            ["Firebase Authentication", "Handles secure user authentication and authorization."],
            ["Go (API Gateway)", "Chosen for speed and scalability to manage backend requests efficiently."],
            ["ChatGPT", "AI-powered inference engine for parsing syllabuses, generating schedules, and understanding course data."],
            ["PostgreSQL", "Relational database storing students, courses, due dates, and contact info."],
            ["Docker", "Ensures consistent, containerized environments across development and production."],
            ["Vercel", "Hosts the frontend with fast global deployment."],
            ["Google Compute", "Hosts the backend APIs and services reliably and securely."]]

    }, {
        id: "bluebot", name: "BlueBot",
        description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, supported upwards of 100,000 daily active users while maintaining high uptime and reliability.",
        github: "https://github.com/ChujiaGuo/pubhallsbot",
        skills:
            [["Node.js & JavaScript", "Core technologies used to build the main application, enabling efficient, real-time interactions."],
            ["Discord.js", "Primary library for seamless integration with the Discord API."],
            ["Java", "Implemented secondary processes requiring concurrency and high-performance computation."],
            ["MySQL", "Managed user and community data with a robust relational database."],
            ["SQLite", "Initially used for configurations and settings before migrating to MySQL for scalability."]
            ]
    },
    {
        id: "webpage", name: "This website!",
        description: "Use this website to get to know me! Works on mobile!",
        github: "https://github.com/ChujiaGuo/webpage",
        skills:
            [["Next.js", "The framework used to build this site. Absolute overkill, but fun to use"],
            ["TypeScript", "Language of choice for this project"]]
    }
]

// experience_placeholder = { company: "", alt: "", position: "", location: "", date: "", description: "", project: "", notes: [] }
// project_placeholder = { id: "", name: "", description: "", github: "", skills: [["", ""]] }