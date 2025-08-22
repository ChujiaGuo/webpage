import * as strings from "../lib/strings";
import { nunito } from "@/lib/fonts";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col md:flex-row items-center md:items-left justify-center w-3/4 gap-4">
                <span className="w-1/2 order-2 md:order-1">
                    <h1 className={`${nunito.className} text-3xl text-gray-200 text-center md:text-left`}>
                        {strings.landing_header}
                    </h1>
                    <h2 className={`${nunito.className} text-lg text-gray-400 text-center md:text-left`}>
                        {strings.landing_description}
                    </h2>
                    <hr />
                    <p className={`${nunito.className} pt-3 text-lg text-gray-300 text-center md:text-left`}>
                        {strings.landing_paragraph} <Link href='/projects' className="text-pink-300">here!</Link>
                    </p>
                </span>
                <p className="border w-1/3 text-center order-1 md:order-2">
                    image goes here probably (i dont have an image)
                </p>
            </div>
        </div>
    );
}
