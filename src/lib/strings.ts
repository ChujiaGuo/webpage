export const landing_header = "Hi! I'm Chujia Guo."

export const landing_description = "Undergraduate Computer Science @ University of Maryland, Baltimore County"

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
    { company: "Guangzhou Quantitative Software Technology Co.", alt: "(广州量化软件技术有限公司)", position: "Full-Stack Intern", location: "Guangzhou, China", date: "June 2025 - August 2025", description: "Developed and optimized full-stack solutions using Next.js and Go to support portfolio managers with real-time management of over 500 stocks, while significantly improving system performance and user experience.", project: "" },
    { company: "BlueBot", alt: "", position: "Founder", location: "Silver Spring, MD", date: "May 2020 - September 2023", description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.", project: "bluebot" },
]

export const projects = [
    {
        id: "bluebot", name: "BlueBot", description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.", github: "https://github.com/ChujiaGuo/pubhallsbot", skills:
            [["Team Leadership and Management", "Led and worked with a team of 10 developers to build and optimize our system with Git, Docker, and Slack for streamlined communication and development."],
            ["Task Optimization and Automation", "Automated 75+ tasks across AWS, with reduced response and operating times by 30%"],
            ["Artificial Intelligence Integration", "Integrated custom trained AI models designed to recognize broad behavioral patterns in consenting users."],
            ["Real-Time Functionality", "Developed REST APIs, and integrated OAuth2 to provide users with real-time services, maintain secure authentication, while maintaining an uptime of over 99.9% "],
            ]
    },
    { id: "WIP", name: "Work in Progress", description: "Current projects in progress!", skills: [] }
]

const experience_placeholder = { company: "", alt: "", position: "", location: "", date: "", description: "", project: "" }
const project_placeholder = { id: "", name: "", description: "", skills: [["", ""], ["", ""]] }