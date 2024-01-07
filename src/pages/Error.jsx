import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Contact from "../components/Contact";
import { useRef } from "react";

function Error() {
  const navigate = useNavigate();
  const refContact = useRef(null);

  return (
    <>
      <header className="border-b-[1px] border-black/10 dark:border-white/50 dark:text-white/90">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 3xl:px-16">
          <ul className="mobile-h6-small-regular flex items-center gap-6">
            <li
              onClick={() =>
                navigate("/", {
                  state: {
                    location: "home",
                  },
                })
              }
              className="cursor-pointer text-2xl pointerhover:hover:scale-x-105"
            >
              😇
            </li>
            <li
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
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
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
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
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
              onClick={() =>
                refContact.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li>
              <ThemeSwitcher />
            </li>
            <li className="mobile-h6-small hidden text-primary dark:text-darkPrimary xl:inline-block">
              olivia.jeongok.lee@gmail.com
            </li>
            <li
              className="hidden xl:inline-block"
              onClick={() =>
                window.open(
                  "https://github.com/ok-olly",
                  "_blank",
                  "noopener, noreferrer",
                )
              }
            >
              <SiGithub className="cursor-pointer  pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
            </li>
            <li
              className="hidden xl:inline-block"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/olivia-jeongok-lee",
                  "_blank",
                  "noopener, noreferrer",
                )
              }
            >
              <SiLinkedin className="cursor-pointer  pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col items-center gap-8 py-16">
        <p className="dark:text-white/90">앗 잘못 들어오셨어요 ❗️</p>
        <button
          onClick={() => navigate(-1)}
          className="text-black/75 dark:text-white/90 pointerhover:hover:underline"
        >
          <RiArrowGoBackFill className="mr-2 inline -translate-y-1" />
          <span>되돌아가기</span>
        </button>
      </div>

      <footer>
        <Contact ref={refContact} />

        <div className="flex flex-col gap-3 px-6 py-8 dark:text-white/90 md:flex-row md:flex-wrap md:justify-between lg:px-12 3xl:px-16">
          <nav>
            <ul className="mobile-h6-small-regular flex justify-between sm:justify-start sm:gap-6 ">
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
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
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
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
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
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
                onClick={() =>
                  refContact.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap">
            <span className="mr-4">&copy; Copyright Olivia Lee 2024.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex flex-wrap">
            <span className="mr-4">Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>

          <ul className="flex items-center gap-6 lg:gap-8">
            <li className="mobile-h6-small text-primary dark:text-darkPrimary">
              olivia.jeongok.lee@gmail.com
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://github.com/ok-olly",
                  "_blank",
                  "noopener, noreferrer",
                )
              }
            >
              <SiGithub className="cursor-pointer pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/olivia-jeongok-lee",
                  "_blank",
                  "noopener, noreferrer",
                )
              }
            >
              <SiLinkedin className="cursor-pointer pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Error;
