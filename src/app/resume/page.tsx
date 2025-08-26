import * as strings from "@/lib/strings";
import { nunito } from "@/lib/fonts";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="flex flex-col md:flex-col w-full h-full items-center">
            {SkillsEducation()}
            {Experience()}
        </div>
    );
}
function Experience() {
    return (
        <div className="flex flex-col w-2/3 items-center backdrop-blur-sm">
            <h1 className={`${nunito.className} text-2xl text-gray-300/80 text-center`}>
                Experience
            </h1>
            <hr className="w-full mx-auto my-2 border-gray-300/80" />
            {strings.resume_experience.map((item, index) => (
                <div key={item.position + item.company} className="flex flex-col mt-2 w-2/3">
                    <p className={`${nunito.className} text-lg text-gray-300/80 text-center`} >
                        <b>{item.company}</b>
                    </p>
                    <p className={`${nunito.className} text-md text-gray-300/80 text-center`} >
                        <em>{item.alt}</em>
                    </p>
                    <p className={`${nunito.className} text-md text-[#d6a3c9] text-center`} >
                        {item.position}
                    </p>
                    <div className={`flex flex-row justify-between ${nunito.className} text-md text-gray-500`} >
                        <span>{item.location}</span>
                        <span className="text-right">{item.date}</span>
                    </div>
                    <p className={`${nunito.className} text-md text-gray-400 mb-4`} >
                        {item.description} {item.project ? <>Learn more <Link href={`/projects#${item.project}`} className="text-[#d6a3c9]">here.</Link></> : ""}
                    </p>
                    {item.notes?.map(note => {
                        const title = note[0]
                        const desc = note[1]
                        return (
                            <p key={title} className={`${nunito.className} pb-2 px-4 text-md group-hover:text-gray-900 transition`}><b className="text-[#d6a3c9]">{title}</b>: {desc}</p>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

function SkillsEducation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center w-2/3 backdrop-blur-sm">
            {/* Skills */}
            <div className="flex flex-col items-center h-full">
                <h1 className={`${nunito.className} text-2xl text-gray-300/80 text-center`}>
                    Skills
                </h1>
                <hr className="w-full mx-auto my-2 border-gray-300/80" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-4 w-2/3">
                    {Object.entries(strings.skills).map(([key, list]) => {
                        return (
                            <div key={key} className={`${nunito.className}  text-center`}>
                                <p className="text-lg text-gray-300/80"><b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b></p>
                                <p className="text-md text-gray-300/80">{list.join(", ")}</p>
                            </div>)
                    })}
                </div>

            </div>

            {/* Education */}
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full">
                    <h1 className={`${nunito.className} text-2xl text-gray-300/80 text-center`}>
                        Education
                    </h1>
                    <hr className="w-full mx-auto my-2 border-gray-300/80" />
                    <p className={`${nunito.className} pt-2 text-lg text-gray-300/80 text-center`}>
                        <b>B.S. Computer Science <br /> University of Maryland, Baltimore County <br /></b>
                    </p>
                    <p className={`${nunito.className} text-md text-[#d6a3c9] text-center`}>
                        Expected Graduation: Dec 2026 <br />
                    </p>
                </div>
                <div>
                    <p className={`${nunito.className} text-lg text-gray-300/80 text-center`}>
                        <b>Relevant Coursework:</b>
                    </p>
                    <ul className={`mx-auto px-10 mt-2 list-disc list-inside ${nunito.className} text-md text-gray-400`}>
                        {strings.resume_coursework.map(item => (
                            <li key={item.course}>({item.grade}) {item.course}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}