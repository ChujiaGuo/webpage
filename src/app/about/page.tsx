import { nunito } from "@/lib/fonts";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center">
      <h1 className={`${nunito.className} text-2xl text-center`}>
        About Me
      </h1>
      <hr className="w-2/3 mx-auto my-2" />
    </div >
  );
}
