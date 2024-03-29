import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiGit,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

import { IoArrowDownOutline, IoArrowForwardOutline } from "react-icons/io5";

import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Contact from "../components/Contact";

function Home() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProject = useRef(null);
  const refContact = useRef(null);

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleMove(location) {
    location.current?.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      // inline: "nearest",
    });
  }

  useEffect(() => {
    if (state) {
      const targetRef =
        state.location === "home"
          ? refHome
          : state.location === "about"
            ? refAbout
            : state.location === "project"
              ? refProject
              : state.location === "contact"
                ? refContact
                : refHome;

      const timeoutId = setTimeout(() => {
        handleMove(targetRef);
        navigate("/", {});
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [state, navigate]);

  return (
    <>
      <header
        ref={refHome}
        className="border-b-[1px] border-black/10 dark:border-white/50 dark:text-white/90"
      >
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 3xl:px-16">
          <ul className="mobile-h6-small-regular flex items-center gap-6">
            <li
              onClick={() => handleMove(refHome)}
              className="cursor-pointer text-2xl pointerhover:hover:scale-x-105"
            >
              😇
            </li>
            <li
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
              onClick={() => handleMove(refAbout)}
            >
              About Me
            </li>
            <li
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
              onClick={() => handleMove(refProject)}
            >
              My Projects
            </li>
            <li
              className="hidden cursor-pointer sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
              onClick={() => handleMove(refContact)}
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

      <main>
        <section className="flex flex-col items-center gap-12 px-6 py-16 lg:py-24 xl:py-40 3xl:py-48">
          {/* <h3 className="mobile-h3 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-transparent">
            Hey there, I&apos;m Olivia.
          </h3>
          <h1 className="mobile-h1 text-center">Frontend Web Developer</h1> */}
          <h3 className="mobile-h3 inline-block bg-gradient-to-r from-primary to-secondary box-decoration-clone bg-clip-text text-center text-transparent dark:from-darkPrimary dark:to-darkSecondary">
            안녕하세요!
            <br />
            저는 프론트엔드 개발자
          </h3>

          <h1 className="inline text-center dark:text-white/90">
            <span className="mobile-h1">이정옥</span>
            <span className="mobile-h5">입니다</span>
          </h1>

          <p className="dark:text-white/90">만들고 싶은 것을 코딩합니다✨💫</p>

          <PrimaryBtn handleClick={() => handleMove(refAbout)}>
            {/* <span>More about me</span> */}
            <span>더 알아보기</span>
            <IoArrowDownOutline />
          </PrimaryBtn>
        </section>

        <section
          ref={refAbout}
          className="flex flex-col gap-12 bg-gradient-to-r from-primary/50 to-secondary/50 py-16 dark:from-darkPrimary/20 dark:to-darkSecondary/20 dark:text-white/90  lg:flex-row-reverse lg:px-12 lg:py-24 xl:py-40 3xl:gap-24 3xl:px-24 3xl:py-48"
        >
          <div className="px-12 sm:w-1/2 sm:self-center sm:px-6 lg:w-1/3 lg:px-0">
            <img
              src="./img/profile.jpg"
              alt="profile-picture"
              className="w-full rounded-full border-4 border-solid border-white"
            />
          </div>

          <div className="flex w-full flex-col gap-12 px-6 sm:px-12 lg:w-2/3 lg:px-0">
            <div className="flex flex-col gap-8">
              <h3 className="mobile-h3-bold">About Me</h3>

              <div className="indent-2">
                <p>
                  안녕하세요. 저는 React를 사용하는 프론트엔드 개발자
                  이정옥입니다. 만들고 싶은 것을 만들고 있어요. 최근에는 UI
                  디자인에 관심이 생겨 Figma를 배우면서, 보고 계신 이 웹사이트를
                  새로 디자인했습니다. 앱 개발도 재미있을 것 같아 공부해보고
                  싶고 최종적으로는 아름답고 이용하기 편리한 서비스를 만드는
                  것이 목표입니다.
                </p>
                <p>
                  협업은 언제나 환영입니다! 아래 폼으로 메세지를 남겨주세요 😊
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleMove(refContact)}
                className="self-start text-white/90 dark:text-white/90 pointerhover:hover:underline"
              >
                <span>메세지 남기러 가기</span>
                <IoArrowDownOutline className="ml-2 inline -translate-y-0.5" />
              </button>
            </div>

            <div>
              <h5 className="mobile-h5 mb-4 lg:mb-8">Skills</h5>

              <div className="flex flex-wrap gap-2 lg:gap-4">
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiReact className="mr-4 inline -translate-y-0.5 text-2xl text-[#61DAFB]" />
                  <span>React</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiRedux className="mr-4 inline -translate-y-0.5 text-2xl text-[#764ABC]" />
                  <span>Redux</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiJavascript className="mr-4 inline -translate-y-0.5 text-2xl text-[#F7DF1E]" />
                  <span>JavaScript</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiTailwindcss className="mr-4 inline -translate-y-0.5 text-2xl text-[#06B6D4]" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiStyledcomponents className="mr-4 inline -translate-y-0.5 text-2xl text-[#DB7093]" />
                  <span>styled-components</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiSass className="mr-4 inline -translate-y-0.5 text-2xl text-[#CC6699]" />
                  <span>Sass</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiCss3 className="mr-4 inline -translate-y-0.5 text-2xl text-[#1572B6]" />
                  <span>CSS3</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiHtml5 className="mr-4 inline -translate-y-0.5 text-2xl text-[#E34F26]" />
                  <span>HTML5</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10">
                  <SiGit className="mr-4 inline -translate-y-0.5 text-2xl text-[#F05032]" />
                  <span>Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={refProject} className="py-16 lg:py-24 xl:py-40 3xl:py-48">
          <div className="mb-16 px-6 text-center dark:text-white/90 xl:mb-20 3xl:mb-24">
            <h3 className="mobile-h3-bold mb-6">My Projects</h3>
            <p>
              React와 JavaScript로 만든 프로젝트입니다.
              <br />
              자세히 알아보기 버튼을 눌러보세요 😇
            </p>
          </div>

          <div>
            <article className="bg-[#363642] py-12 lg:py-24">
              <div className="mb-12 px-6 sm:px-12 lg:px-24 3xl:mb-24 ">
                <img
                  src="./img/ollycloset/desktop01.png"
                  alt="project1-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center sm:px-24 md:flex-row md:items-center md:justify-between md:gap-0  lg:px-40 3xl:px-48 ">
                <div className="text-white md:text-start">
                  <h4 className="mobile-h4 mb-6">Olly&apos;s Closet</h4>
                  <h5 className="mobile-h5-regular">E-commerce store</h5>
                </div>

                <SecondaryBtn
                  handleClick={() => navigate("/project/ollyscloset")}
                >
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
                  <IoArrowForwardOutline className="inline" />
                </SecondaryBtn>
              </div>
            </article>

            <article className="bg-[#FFEF8A] py-12 lg:py-24">
              <div className="mb-12 px-6 sm:px-12 lg:px-24 3xl:mb-24">
                <img
                  src="./img/todolist/desktop01.png"
                  alt="project2-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center sm:px-24 md:flex-row md:items-center md:justify-between md:gap-0  lg:px-40 3xl:px-48 ">
                <div className="md:text-start">
                  <h4 className="mobile-h4 mb-6">To-Do List</h4>
                  <h5 className="mobile-h5-regular">To do list web app</h5>
                </div>

                <SecondaryBtn handleClick={() => navigate("/project/todolist")}>
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
                  <IoArrowForwardOutline className="ml-4 inline" />
                </SecondaryBtn>
              </div>
            </article>

            <article className="bg-[#D1CBD0] py-12 lg:py-24">
              <div className="mb-12 px-6 sm:px-12 lg:px-24 3xl:mb-24">
                <img
                  src="./img/singstreet/desktop01.png"
                  alt="project3-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center sm:px-24 md:flex-row md:items-center md:justify-between md:gap-0  lg:px-40 3xl:px-48 ">
                <div className="md:text-start">
                  <h4 className="mobile-h4 mb-6">Sing Street</h4>
                  <h5 className="mobile-h5-regular">
                    Movie filming location map
                  </h5>
                </div>

                <SecondaryBtn
                  handleClick={() => navigate("/project/singstreet")}
                >
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
                  <IoArrowForwardOutline className="ml-4 inline" />
                </SecondaryBtn>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <Contact ref={refContact} />

        <div className="flex flex-col gap-3 px-6 py-8 dark:text-white/90 md:flex-row md:flex-wrap md:justify-between lg:px-12 3xl:px-16">
          <nav>
            <ul className="mobile-h6-small-regular flex justify-between sm:justify-start sm:gap-6 ">
              <li
                className="cursor-pointer pointerhover:hover:scale-x-105"
                onClick={() => handleMove(refHome)}
              >
                😇
              </li>
              <li
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
                onClick={() => handleMove(refAbout)}
              >
                About Me
              </li>
              <li
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
                onClick={() => handleMove(refProject)}
              >
                My Projects
              </li>
              <li
                className="cursor-pointer pointerhover:hover:font-semibold pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary"
                onClick={() => handleMove(refContact)}
              >
                Contact
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap">
            <span className="mr-4">&copy; Copyright Olivia Lee 2024.</span>
            <span>All rights reserved.</span>
          </div>

          {/* <div className="flex flex-wrap">
            <span className="mr-4">Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div> */}

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

export default Home;
