import { Link, useLocation, useNavigate } from "react-router-dom";
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

import {
  IoMoonOutline,
  IoSunnyOutline,
  IoMenuOutline,
  IoArrowDownOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import Contact from "../components/Contact";

function Home() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProject = useRef(null);
  const refContact = useRef(null);

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleMove(location) {
    location.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (state) {
      handleMove(
        state.location === "home"
          ? refHome
          : state.location === "about"
            ? refAbout
            : refProject,
      );
      navigate("/", {}); // clear state
    }
  }, [state, navigate]);

  return (
    <>
      {/* <nav>
        <ul>
          <li onClick={() => handleMove(refHome)}>😇</li>
          <li onClick={() => handleMove(refAbout)}>about</li>
          <li onClick={() => handleMove(refProject)}>project</li>
          <li onClick={() => handleMove(refContact)}>contact</li>
        </ul>
      </nav> */}

      <header ref={refHome} className="border-b-[1px] border-black/10">
        <div className="flex items-center justify-between px-6 py-4">
          <ul>
            <li
              onClick={() => handleMove(refHome)}
              className="pointerhover:hover:scale-x-105 cursor-pointer text-2xl"
            >
              😇
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li className="flex rounded-full bg-black/5 p-1">
              <div className="rounded-full bg-black/10 px-2 py-1">
                <IoMoonOutline />
              </div>
              <div className="rounded-full px-2 py-1">
                <IoSunnyOutline />
              </div>
            </li>
            <li>
              <IoMenuOutline className="pointerhover:hover:text-primary cursor-pointer text-2xl" />
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="flex flex-col gap-12 px-12 py-16">
          <h3 className="mobile-h3 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-transparent">
            Hey there, I&apos;m Olivia.
          </h3>
          <h1 className="mobile-h1 text-center">Frontend Web Developer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            laborum a quas. Quia sequi neque atque excepturi cum corporis,
            itaque dolor magni. Ducimus temporibus, provident quisquam quo rerum
            similique hic.
          </p>
          {/* <button
            onClick={() => handleMove(refAbout)}
            className="mobile-h6-small self-center rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-white shadow-xl"
          >
            <span>More about me</span>
            <IoArrowDownOutline className="ml-2 inline" />
          </button> */}
          <PrimaryBtn handleClick={() => handleMove(refAbout)}>
            <span>More about me</span>
            <IoArrowDownOutline />
          </PrimaryBtn>
        </section>

        <section
          ref={refAbout}
          className="flex flex-col gap-12 bg-gradient-to-r from-primary/50 to-secondary/50 py-16"
        >
          <div className="px-12">
            <img
              src="./img/profile.jpg"
              alt="profile-picture"
              className="w-full rounded-full border-4 border-solid border-white"
            />
          </div>

          <div className="flex w-full flex-col gap-12 px-6">
            <div className="flex flex-col gap-8">
              <h3 className="mobile-h3-bold">About me</h3>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quibusdam possimus veniam laboriosam, saepe neque officia rem
                deleniti tempore illo eaque nesciunt placeat quo veritatis
                libero qui quaerat iusto. Quas!
              </div>
            </div>

            <div>
              <h5 className="mobile-h5 mb-4">Skills</h5>

              <div className="flex flex-wrap gap-2">
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiReact className="mr-4 inline -translate-y-0.5 text-2xl text-[#61DAFB]" />
                  <span className="">React</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiRedux className="mr-4 inline -translate-y-0.5 text-2xl text-[#764ABC]" />
                  <span className="">Redux</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiJavascript className="mr-4 inline -translate-y-0.5 text-2xl text-[#F7DF1E]" />
                  <span className="">JavaScript</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiTailwindcss className="mr-4 inline -translate-y-0.5 text-2xl text-[#06B6D4]" />
                  <span className="">Tailwind CSS</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiStyledcomponents className="mr-4 inline -translate-y-0.5 text-2xl text-[#DB7093]" />
                  <span className="">styled-components</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiSass className="mr-4 inline -translate-y-0.5 text-2xl text-[#CC6699]" />
                  <span className="">Sass</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiCss3 className="mr-4 inline -translate-y-0.5 text-2xl text-[#1572B6]" />
                  <span className="">CSS3</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiHtml5 className="mr-4 inline -translate-y-0.5 text-2xl text-[#E34F26]" />
                  <span className="">HTML5</span>
                </div>
                <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                  <SiGit className="mr-4 inline -translate-y-0.5 text-2xl text-[#F05032]" />
                  <span className="">Git</span>
                </div>
              </div>
            </div>

            {/* <div>
              <a
                href="./이정옥_포트폴리오.pdf"
                className="underline underline-offset-8 transition-all hover:text-white focus:outline-violet-500 dark:hover:text-neutral-100"
                target="_blank"
              >
                &rarr; 포트폴리오.pdf 열기
              </a>
            </div> */}
          </div>
        </section>

        <section ref={refProject} className="py-16">
          <div className="mb-16 px-12 text-center">
            <h3 className="mobile-h3-bold mb-6">My Projects</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              porro velit architecto, asperiores atque unde? Nisi cupiditate
              necessitatibus pariatur
            </p>
          </div>

          <div>
            <article className="bg-[#363642] py-12">
              <div className="mb-12 px-6">
                <img
                  src="./img/ollycloset/desktop01.png"
                  alt="project1-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center">
                <div className="text-white">
                  <h4 className="mobile-h4 mb-6">Olly&apos;s Closet</h4>
                  <h5 className="mobile-h5-regular">E-commerce store</h5>
                </div>

                <SecondaryBtn
                  handleClick={() => navigate("/project/ollyscloset")}
                >
                  <span>View case</span>
                  <IoArrowForwardOutline className="inline" />
                </SecondaryBtn>
              </div>
            </article>

            <article className="bg-[#FFEF8A] py-12">
              <div className="mb-12 px-6">
                <img
                  src="./img/todolist/desktop01.png"
                  alt="project2-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center">
                <div>
                  <h4 className="mobile-h4 mb-6">To-Do List</h4>
                  <h5 className="mobile-h5-regular">To do list web app</h5>
                </div>

                <SecondaryBtn handleClick={() => navigate("/project/todolist")}>
                  <span>View case</span>
                  <IoArrowForwardOutline className="ml-4 inline" />
                </SecondaryBtn>
              </div>
            </article>

            <article className="bg-[#D1CBD0] py-12">
              <div className="mb-12 px-6">
                <img
                  src="./img/singstreet/desktop01.png"
                  alt="project3-thumbnail"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-12 px-12 text-center">
                <div>
                  <h4 className="mobile-h4 mb-6">Sing Street</h4>
                  <h5 className="mobile-h5-regular">
                    Movie filming location map
                  </h5>
                </div>

                <SecondaryBtn
                  handleClick={() => navigate("/project/singstreet")}
                >
                  <span>View case</span>
                  <IoArrowForwardOutline className="ml-4 inline" />
                </SecondaryBtn>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* <Footer
        ref={refContact}
        handleMove={handleMove}
        refHome={refHome}
        refAbout={refAbout}
        refProject={refProject}
        refContact={refContact}
      /> */}

      <Contact ref={refContact} />

      <footer className="px-6 py-8">
        <nav className="mb-3">
          <ul className="mobile-h6-small-regular flex justify-between">
            <li
              className="pointerhover:hover:scale-x-105 cursor-pointer"
              onClick={() => handleMove(refHome)}
            >
              😇
            </li>
            <li
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
              onClick={() => handleMove(refAbout)}
            >
              About Me
            </li>
            <li
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
              onClick={() => handleMove(refProject)}
            >
              My Projects
            </li>
            <li
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
              onClick={() => handleMove(refContact)}
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
            <span className="mobile-h6-small text-primary">
              olivia.jeongok.lee@gmail.com
            </span>
            <Link to="https://github.com/ok-olly">
              <SiGithub className="pointerhover:hover:text-primary cursor-pointer" />
            </Link>
            <Link to="https://www.linkedin.com/in/olivia-jeongok-lee">
              <SiLinkedin className="pointerhover:hover:text-primary cursor-pointer" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
