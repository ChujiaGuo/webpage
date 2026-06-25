export const landing_header = "Hi! I'm Chujia Guo."

export const landing_description = "Computer Science @ University of Maryland, Baltimore County"

export const landing_paragraph = "I'm a developer with a strong focus on performance and full-stack architecture. I've worked on projects involving TypeScript, Go, and custom APIs — aiming to build software that's fast, maintainable, and user-centered. Check out my projects "

export const resume_coursework = [
    { grade: "A", course: "Design & Analysis of Algorithms" },
    { grade: "B", course: "Data Structures" },
    { grade: "A", course: "Principles of Operating Systems" },
    { grade: "A", course: "Software Engineering & Development" },
    { grade: "B", course: "Introduction to AI & Machine Learning" },
    { grade: "A", course: "Database Management Systems" },
    { grade: "A", course: "Computer Networks" },
    { grade: "B", course: "Intro to Cybersecurity" },
]

export const skills = {
    "languages": ["Java", "Python", "C/C++", "SQL", "Go", "JavaScript/TypeScript", "HTML/CSS"],
    "frameworks": ["React", "Node.js", "Flask", "JUnit", "FastAPI", "TensorFlow"],
    "tools": ["Git", "Docker", "AWS", "Google Cloud Platform", "Claude Code", "Cursor", "API Design", "CI/CD", "System Architecture"],
    "libraries": ["pandas", "NumPy", "Matplotlib"],
}

export const resume_experience = [
    {
        company: "Guangzhou Quantitative Software Technology Co.", alt: "广州量化软件技术有限公司", position: "Full-Stack Software Engineering Intern", location: "Guangzhou, China", date: "June 2025 - August 2025", description: "Developed and optimized full-stack solutions using Next.js and Go to support real-time stock data monitoring, reducing API latency and improving client-facing performance.", project: "", notes:
            [
                [
                    "WebSocket Performance",
                    "Optimized Go backend APIs to broadcast real-time stock data to multiple concurrent internal clients via a proof-of-concept WebSocket implementation, reducing API response latency by 30%."
                ],
                [
                    "React Context Architecture",
                    "Engineered a Next.js portfolio dashboard utilizing split React Context windows to isolate high-frequency tick updates by ticker, minimizing unnecessary component re-renders."
                ],
            ]
    },
    {
        company: "BlueBot Community Project", alt: "", position: "Founder, Lead Developer & Consultant", location: "Distributed Team", date: "March 2020 - Present", description: "Founded and led development of a scalable community platform, focusing on reliability, automation, and moderation tooling across a distributed engineering team.", project: "bluebot", notes: [
            [
                "Workflow Management",
                "Migrated project tracking workflows from Discord to Trello to efficiently manage bug tickets, feature requests, and biweekly public changelog releases for a distributed engineering team."
            ],
            [
                "CI/CD Pipeline",
                "Established automated CI/CD validation pipelines and integration unit tests to guarantee that code contributions maintained zero-downtime production deployments."
            ],
            [
                "Moderation Engine",
                "Designed a customizable, multi-tenant moderation engine allowing individual servers to dynamically configure isolated allowlists, denylists, and security strictness levels."
            ],
        ]
    },
]

export const projects = [
    {
        id: "classic", name: "Classic",
        description: "Three-service microservices system that parses course syllabi using LLMs to extract instructors, meeting times, exam dates, assignments, and grade weights into a unified student dashboard. Eliminates manual cross-referencing across LMS platforms and exports directly to calendar formats.",
        github: "https://github.com/ChujiaGuo/classic",
        skills:
            [["Local-First LLM Development", "Defaults to a local Ollama instance (gemma4:12b) for fully offline development without incurring API costs; Anthropic Claude and Google Gemini are drop-in alternatives configured via a single environment variable, requiring no code changes to switch providers."],
            ["Structured Extraction Pipeline", "Engineered a strict JSON extraction prompt — no markdown fences, enforced null semantics, percentage-to-decimal conversion — parsing syllabi into typed Go structs covering instructors (name, email, office hours), meeting times, exam dates, assignments, projects, and grade weights."],
            ["Testing Infrastructure", "Validated parser correctness with unit tests that mock LLM provider calls and assert against known syllabus inputs; Playwright component tests render the Next.js frontend in a real browser — both suites run with zero external service dependencies."]]
    },
    {
        id: "bluebot", name: "BlueBot",
        description: "Discord bot platform for a Realm of the Mad God gaming community, managing 10k+ members across multiple synchronized servers. Provides automated moderation, OCR-based screenshot parsing, raid management, and real-time cross-guild role synchronization.",
        github: "https://github.com/ChujiaGuo/blueBot",
        skills:
            [["Cross-Guild Synchronization", "Designed dual-server member synchronization that mirrors nickname changes and affiliate staff role assignments across two connected Discord guilds in real time, with per-guild JSON config files and Bottleneck for API rate limiting."],
            ["Database Optimization", "Optimized MySQL query performance under high concurrency by implementing primary indexing on user IDs, enabling fast lookups of historical activity logs and punishment records across 10k+ member records."],
            ["Containerized Deployment", "Decoupled the core bot process from persistent storage by containerizing the bot in Docker while hosting the MySQL database independently on AWS, allowing each component to scale and restart independently."]]
    },
    {
        id: "oiss", name: "UMBC OISS Data Tool",
        description: "Full-stack visa case management dashboard for UMBC's Office of International Student Services. Ingests Excel spreadsheets of employee visa records, normalizes and aggregates data across F-1, J-1, H-1B, and PR categories, and surfaces renewal deadlines, pending cases, and period cohort analytics.",
        github: "https://github.com/CMSC447-Team-9/Visa-Dashboard-Project",
        skills:
            [["Analytics Dashboard", "Designed a five-view dashboard covering visa type counts (F-1, J-1, H-1B, PR), year-over-year case trends, upcoming renewal deadlines, a pending applications table, and an individual employee detail view — with period cohort classification mapping visa start dates against academic, reporting, and calendar year boundaries for compliance reporting."],
            ["In-Memory State Architecture", "Maintained application state as two in-memory Pandas DataFrames (full dataset and filtered active visas) with HTTP-only session cookies scoped per upload and a dedicated logout endpoint that resets both DataFrames, ensuring no visa data persists between user sessions."]]
    },
    {
        id: "webpage", name: "This website!",
        description: "Responsive portfolio site built with Next.js 16 and TypeScript, statically exported and deployed to GitHub Pages via a GitHub Actions CI/CD pipeline that publishes the built output to an external repository on every push to main.",
        github: "https://github.com/ChujiaGuo/webpage",
        skills:
            [["Static Export & CI/CD", "Configured Next.js with output: 'export' to generate a fully static site with no server runtime. A GitHub Actions workflow builds and deploys the output directory to an external GitHub Pages repository (chujiaguo.github.io) on every push to main using a scoped personal token."],
            ["Content Architecture", "Centralized all copy — landing text, experience entries, project descriptions, skills, and coursework — in a single strings.ts module, keeping the component tree purely presentational and making content updates a single-file change."],
            ["Hash-Based Deep Linking", "Built URL hash deep linking on the Projects page — experience entries on the Resume page link to /projects#<id>, which highlights the matching project card on load and on hashchange events, with the hash cleared on any page click."],
            ["Particle Background", "Implemented a fixed full-screen particle background using @tsparticles/react (80 linked dots, 120fps cap) rendered behind all page content via a negative z-index fixed layer, with Tailwind responsive breakpoints for mobile and desktop layouts throughout."]]
    }
]

// experience_placeholder = { company: "", alt: "", position: "", location: "", date: "", description: "", project: "", notes: [] }
// project_placeholder = { id: "", name: "", description: "", github: "", skills: [["", ""]] }
