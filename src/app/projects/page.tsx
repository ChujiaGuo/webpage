'use client'
import { useState, useEffect } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { nunito } from "@/lib/fonts";
import * as strings from "@/lib/strings"

const projectInactive = `border border-gray-300/80 rounded-xl p-2 group hover:bg-[#d6a3c9] hover:border-[#d6a3c9] transition h-full`
const titleTextInactive = `text-xl font-semibold mb-2 text-center group-hover:text-black transition`
const descTextInactive = `pb-2 px-4 group-hover:text-gray-900 transition`
const skillsTextInactive = `pb-2 px-4 text-md group-hover:text-gray-900 transition`

const projectActive = `border rounded-xl p-2 bg-pink-300 border-pink-300`
const titleTextActive = `text-xl font-semibold mb-2 text-center text-black`
const descTextActive = `text-gray-900 pb-2 px-4`
const skillsTextActive = `text-gray-900 pb-2 px-4`


export default function ProjectsPage() {
    const [highlightedProject, setHighlightedProject] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setHighlightedProject(null)
        if (window.location.hash)
            window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    useEffect(() => {
        setHighlightedProject(window.location.hash.substring(1));
        const handleHashChange = () => {
            setHighlightedProject(window.location.hash.substring(1));
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center" onClick={() => handleClick("")}>
            <h1 className={`${nunito.className} text-2xl text-center`}>
                Projects
            </h1>
            <hr className="w-2/3 mx-auto my-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-4 w-2/3">
                {strings.projects.map(item => {
                    const isActive = highlightedProject === item.id
                    return (
                        <a href={item.github} key={item.name} target="_blank">
                            <div className={isActive ? projectActive : projectInactive}>
                                {/* Card Header */}
                                <div className="flex w-full justify-center">
                                    <div className="flex-1 flex w-1/3">
                                    </div>
                                    <div className="flex-1 flex w-1/3 justify-center gap-4 pt-2">
                                        <h3 className={isActive ? titleTextActive : titleTextInactive}>{item.name}</h3>
                                    </div>
                                    <div className="flex-1 flex w-1/3 justify-end p-2">
                                        {item.github ?
                                            <SiGithub className={isActive ? "filter invert" : "group-hover:text-black transition"}/>
                                            : null}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <p className={isActive ? descTextActive : descTextInactive}>{item.description}</p>
                                {item.skills.map(skill => {
                                    const title = skill[0]
                                    const desc = skill[1]
                                    return (
                                        <p key={title} className={isActive ? skillsTextActive : skillsTextInactive}><b className={`${isActive?"text-gray-900":"text-[#d6a3c9] transition"} group-hover:text-gray-900`}>{title}</b>: {desc}</p>
                                    )
                                })}
                            </div>
                        </a>
                    )
                })}
            </div>
        </div >
    );
}