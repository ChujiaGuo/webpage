import { nunito } from "@/lib/fonts";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center">
      <h1 className={`${nunito.className} text-2xl text-center w-full backdrop-blur-sm`}>
        About Me
      </h1>
      <hr className="w-2/3 mx-auto my-2" />
      <div className={`rounded flex flex-col md:flex-row mt-4 p-2 ${nunito.className} text-lg gap-4 w-2/3 md:w-1/2 justify-between backdrop-blur-sm items-center`}>
        <div className="">
          Hello, I&apos;m a computer science student with a passion for computer science and engineering. I enjoy working with others and exploring unique and innovative solutions to a variety of problems.
          In particular, I love tackling challenging problems and devising creative, practical solutions that make an impact. Outside of my studies, I enjoy playing badminton, reading, and playing any manner competitive games — but I&apos;m also amenable to just relaxing.
          <br /><br />
        </div>
        <Image src="/about.png" alt="A picture of me" width={400} height={300} unoptimized={true} />
      </div>
    </div >
  );
}
