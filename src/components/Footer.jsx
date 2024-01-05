import { Link, useNavigate } from "react-router-dom";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { useRef } from "react";
import Contact from "./Contact";

function Footer() {
  const refContact = useRef(null);

  const navigate = useNavigate();

  return (
    <footer>
      <Contact ref={refContact} />

      <div className="px-6 py-8 dark:text-white/90">
        <nav className="mb-3">
          <ul className="mobile-h6-small-regular flex justify-between">
            <li
              className="cursor-pointer pointerhover:hover:scale-x-105"
              onClick={() =>
                navigate("/", {
                  state: {
                    location: "home",
                  },
                })
              }
            >
              😇
            </li>
            <li
              className="pointerhover:dark:hover:text-darkPrimary cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary"
              onClick={() =>
                navigate("/", {
                  state: {
                    location: "about",
                  },
                })
              }
            >
              About Me
            </li>
            <li
              className="pointerhover:dark:hover:text-darkPrimary cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary"
              onClick={() =>
                navigate("/", {
                  state: {
                    location: "project",
                  },
                })
              }
            >
              My Projects
            </li>
            <li
              className="pointerhover:dark:hover:text-darkPrimary cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary"
              onClick={() =>
                refContact.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap">
            <span className="mr-4">&copy; Copyright Olivia Lee 2024.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex flex-wrap">
            <span className="mr-4">Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="mobile-h6-small dark:text-darkPrimary text-primary">
              olivia.jeongok.lee@gmail.com
            </span>
            <Link to="https://github.com/ok-olly">
              <SiGithub className="pointerhover:dark:hover:text-darkPrimary cursor-pointer pointerhover:hover:text-primary" />
            </Link>
            <Link to="https://www.linkedin.com/in/olivia-jeongok-lee">
              <SiLinkedin className="pointerhover:dark:hover:text-darkPrimary cursor-pointer pointerhover:hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
