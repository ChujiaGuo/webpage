import * as strings from "@/lib/strings";
import { nunito } from "@/lib/fonts";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center">
            {Education()}
            {Experience()}

        </div>
    );
}
function Experience() {
    return (
        <div className="mt-4 flex flex-col w-2/3 items-center">
            <h1 className={`${nunito.className} text-2xl text-gray-200 text-center`}>
                Experience
            </h1>
            <hr className="w-full mx-auto my-2" />
            {strings.resume_experience.map((item, index) => (
                <div key={item.position + item.company} className="flex flex-col mt-2 w-2/3">
                    <p className={`${nunito.className} text-lg text-gray-300 text-center`} >
                        <b>{item.company}</b>
                    </p>
                    <p className={`${nunito.className} text-md text-gray-300 text-center`} >
                        <em>{item.alt}</em>
                    </p>
                    <p className={`${nunito.className} text-md text-gray-400 text-center`} >
                        {item.position}
                    </p>
                    <div className={`flex flex-row justify-between ${nunito.className} text-md text-gray-400`} >
                        <span>{item.location}</span>
                        <span>{item.date}</span>
                    </div>
                    <p className={`${nunito.className} text-md text-gray-300`} >
                        {item.description} {item.project ? <>Learn more <Link href={`/projects#${item.project}`} className="text-pink-300">here.</Link></> : ""}
                    </p>
                    {index < strings.resume_experience.length - 1 && <hr className="w-3/4 mx-auto border-gray-400 my-2" />}

                </div>
            ))}
        </div>
    )
}

function Education() {
    return (
        <div className="flex flex-col w-2/3 justify-center items-center gap-4">
            <div className="w-full">
                <h1 className={`${nunito.className} text-2xl text-gray-200 text-center`}>
                    Education
                </h1>
                <hr className="w-full mx-auto my-2 " />
                <p className={`${nunito.className} pt-2 text-lg text-gray-300 text-center`}>
                    B.S. Computer Science <br /> University of Maryland, Baltimore County <br />
                </p>
                <p className={`${nunito.className} text-md text-gray-400 text-center`}>
                    Expected Graduation: Dec 2026 <br />
                </p>
            </div>
            <div>
                <p className={`${nunito.className} text-lg text-gray-300 text-center`}>
                    Relevant Coursework:
                </p>
                <hr className="mx-auto border-gray-400" />
                <ul className={`mx-auto px-10 list-disc list-inside ${nunito.className} text-md text-gray-300`}>
                    {strings.resume_coursework.map(item => (
                        <li key={item.course}>({item.grade}) {item.course}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}