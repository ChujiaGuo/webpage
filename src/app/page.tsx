import * as strings from "../lib/strings";
import { nunito } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const unoptimized = process.env.NODE_ENV !== 'production';
    return (
        <div className="flex flex-col w-full h-full items-center justify-center bg-[#070709]/50 backdrop-blur-xs">
            <div className="flex flex-col md:flex-row md:items-left items-center justify-center w-3/4 gap-4">
                <span className="w-1/2 order-2 md:order-1">
                    <h1 className={`${nunito.className} text-3xl text-gray-300 text-center md:text-left`}>
                        {strings.landing_header}
                    </h1>
                    <h2 className={`${nunito.className} text-lg text-gray-500 text-center md:text-left`}>
                        {strings.landing_description}
                    </h2>
                    <hr className="" />
                    <p className={`${nunito.className} pt-3 text-lg text-center md:text-left`}>
                        {strings.landing_paragraph} <Link href='/projects' className="text-[#d6a3c9]">here!</Link>
                    </p>
                </span>
                <p className="w-1/4 text-center order-1 md:order-2">
                    <Image src="https://placehold.co/400x300" alt="A picture of me" width={400} height={300} unoptimized={unoptimized} />
                </p>
            </div>
        </div>
    );
}
