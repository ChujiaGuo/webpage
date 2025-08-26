import { nunito } from "@/lib/fonts";
import { faLinkedin, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-col mx-auto w-full h-full items-center">
      <h1 className={`${nunito.className} text-2xl text-center w-full backdrop-blur-sm`}>
        Contact
      </h1>
      <hr className="w-2/3 mx-auto my-2 backdrop-blur-sm" />
      <p className={`${nunito.className} text-lg text-center w-full backdrop-blur-sm`}>
        You can find me on any of the following platforms:
      </p>
      <div className={`flex flex-col w-2/3 gap-4 p-4 items-center ${nunito.className} backdrop-blur-sm`}>
        <a href="https://github.com/ChujiaGuo" target="_blank" className="flex items-center gap-2 text-lg">
          <FontAwesomeIcon icon={faGithub} style={{ width: '28px', height: '28px' }} /> <b className="text-[#d6a3c9]">GitHub</b>
        </a>
        <a href="https://www.linkedin.com/in/guo-chujia/" target="_blank" className="flex items-center gap-2 text-lg">
          <FontAwesomeIcon icon={faLinkedin} style={{ width: '28px', height: '28px' }} /> <b className="text-[#d6a3c9]">Linkedin</b>
        </a>
        <a href="https://discord.gg/H3c3PUK7rP" target="_blank" className="flex items-center gap-2 text-lg">
          <FontAwesomeIcon icon={faDiscord} style={{ width: '28px', height: '28px' }} /> <b className="text-[#d6a3c9]">Discord</b> (bluewizadg)
        </a>
        <p className={`${nunito.className} text-lg text-center w-full`}>
          Or send me a message below:
        </p>
        <form action="https://formspree.io/f/xeolqprl" method="POST" target="_blank" className="flex flex-col gap-2 w-2/3 items-center">
          <div className="flex flex-row w-full gap-2">
            <input type="name" name="name" placeholder="Name" className="rounded-lg text-gray-300/80 border w-1/2 p-2" required />
            <input type="email" name="email" placeholder="Email" className="rounded-lg text-gray-300/80 border w-1/2 p-2" required />
          </div>
          <textarea name="message" placeholder="Message" className="rounded-lg text-gray-300/80 border w-full p-2" required />
          <button type="submit" className="rounded-lg border p-2 hover:bg-[#d6a3c9] hover:text-gray-900 hover:border-[#d6a3c9] transition" >Send</button>
        </form>
      </div>

    </div >
  );
}
