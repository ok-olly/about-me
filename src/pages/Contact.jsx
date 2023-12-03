import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SiGithub, SiLinkedin } from "react-icons/si";
import EmailForm from "../components/EmailForm";
import Heading from "../components/Heading";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5 md:p-7">
        <div className="flex w-full justify-between">
          <Heading>Contact</Heading>

          <div className="flex items-center gap-2 text-base">
            <Link
              to="https://github.com/ok-olly"
              data-tooltip-id="my-tooltip-1"
              className="hover:text-white focus:outline-violet-500"
            >
              <SiGithub className="text-xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/olivia-jeongok-lee"
              data-tooltip-id="my-tooltip-2"
              className="hover:text-white  focus:outline-violet-500"
            >
              <SiLinkedin className="text-xl" />
            </Link>
          </div>
        </div>

        <EmailForm />
      </div>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="https://github.com/ok-olly"
        variant="success"
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        content="https://www.linkedin.com/in/olivia-jeongok-lee"
        variant="success"
      />
    </>
  );
}

export default Contact;
