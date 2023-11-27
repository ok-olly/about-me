import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";
import EmailForm from "../components/EmailForm";
import Heading from "../components/Heading";

function Contact() {
  return (
    // <div className="px-3">
    <div className="flex flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5">
      <div className="flex w-full justify-between">
        <Heading>Contact</Heading>

        <div className="flex items-center gap-2 text-base">
          <Link
            to="https://github.com/ok-olly"
            className="hover:text-white focus:outline-violet-500"
          >
            <SiGithub className="text-xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/olivia-jeongok-lee"
            className="hover:text-white  focus:outline-violet-500"
          >
            <SiLinkedin className="text-xl" />
          </Link>
        </div>
      </div>

      <EmailForm />
    </div>
    // </div>
  );
}

export default Contact;
