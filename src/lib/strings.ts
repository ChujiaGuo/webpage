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
    { company: "Guangzhou Quantitative Software Technology Co.", alt: "广州量化软件技术有限公司", position: "Full-Stack Intern", location: "Guangzhou, China", date: "June 2025 - August 2025", description: "Developed and optimized full-stack solutions using Next.js and Go to support portfolio managers with real-time management of over 500 stocks, while significantly improving system performance and user experience.", project: "" },
    { company: "BlueBot", alt: "", position: "Founder", location: "Silver Spring, MD", date: "May 2020 - September 2023", description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.", project: "bluebot" },
]

export const projects = [
    {
        id: "webpage", name: "This website!",
        description: "Use this website to get to know me!",
        github: "https://github.com/ChujiaGuo/webpage",
        skills:
            [["Next.js", "The framework used to build this site."],
            ["TypeScript", "Language of choice for this project"]]
    },
    {
        id: "bluebot", name: "BlueBot",
        description: "Planned and developed a highly scalable platform using Node.js, Python, and Java, able to support up to 100,000 daily active users while maintaining high uptime and reliability.",
        github: "https://github.com/ChujiaGuo/pubhallsbot",
        skills:
            []
    },
    { id: "WIP", name: "Work in Progress", description: "Current projects in progress:", skills: [] }
]

const experience_placeholder = { company: "", alt: "", position: "", location: "", date: "", description: "", project: "" }
const project_placeholder = { id: "", name: "", description: "", github: "", skills: [["", ""], ["", ""]] }