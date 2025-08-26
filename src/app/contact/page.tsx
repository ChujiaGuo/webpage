import { nunito } from "@/lib/fonts";

export default function ContactPage() {
  return (
      <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center">
        <h1 className={`${nunito.className} text-2xl text-center w-full backdrop-blur-sm`}>
          Contact
        </h1>
        <hr className="w-2/3 mx-auto my-2" />
      </div >
    );
}
