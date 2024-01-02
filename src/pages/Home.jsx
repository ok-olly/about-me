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
} from "react-icons/si";

import {
  IoMoonOutline,
  IoSunnyOutline,
  IoMenuOutline,
  IoArrowDownOutline,
} from "react-icons/io5";

import Heading from "../components/Heading";
import ArrowButton from "../components/ArrowButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
// import Nav from "../components/Nav";

const style =
  "mt-3 rounded-xl border-4 border-dashed border-white p-2 hover:border-violet-300 hover:bg-violet-500 hover:text-white  active:border-violet-500 active:bg-violet-700 dark:border-neutral-300 dark:hover:bg-violet-900 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between";

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
      handleMove(state.location === "about" ? refAbout : refProject);
      navigate("/", {}); // clear state
    }
  }, [state, navigate]);

  return (
    <div>
      {/* 잠시 가려놓기
      <nav>
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
              className="cursor-pointer text-2xl"
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
              <IoMenuOutline className="text-2xl" />
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="flex flex-col gap-12 px-12 py-16">
          <h3 className="from-primary to-secondary mobile-h3 inline-block bg-gradient-to-r bg-clip-text text-center text-transparent">
            Hey there, I'm Olivia.
          </h3>
          <h1 className="mobile-h1 text-center">Frontend Web Developer</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            laborum a quas. Quia sequi neque atque excepturi cum corporis,
            itaque dolor magni. Ducimus temporibus, provident quisquam quo rerum
            similique hic.
          </p>
          <button
            onClick={() => handleMove(refAbout)}
            className="from-primary to-secondary mobile-h6-small self-center rounded-full bg-gradient-to-r px-8 py-4 text-white shadow-xl"
          >
            <span>More about me</span>
            <IoArrowDownOutline className="ml-2 inline" />
          </button>
        </section>

        {/* 넘지말자.. */}
        {/* 넘지말자.. */}
        {/* 넘지말자.. */}

        <section
          ref={refAbout}
          className="from-primary/50 to-secondary/50 flex flex-col gap-12 bg-gradient-to-r py-16"
        >
          <div className="px-12">
            <img
              src="./img/profile.jpg"
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
              <h3 className="mobile-h5 mb-4">Skills</h3>

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

        <div className="h-screen">
          <div className="mb-5" ref={refProject}>
            <Heading>Work</Heading>
          </div>

          <div className="text-center">
            <Link to="/project/ollyscloset">
              <div className={style}>
                <h2>Olly&apos;s Closet</h2>
                <span className="text-sm sm:text-base">E-Commerce Store</span>
              </div>
            </Link>

            <Link to="/project/todolist">
              <div className={style}>
                <h2>To-Do List</h2>
                <span className="text-sm sm:text-base">Web App</span>
              </div>
            </Link>

            <Link to="/project/singstreet">
              <div className={style}>
                <h2>Sing Street</h2>
                <span className="text-sm sm:text-base">
                  Movie Filming Location Map
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* <footer ref={refContact}>
        <Footer />
      </footer> */}
      <Footer ref={refContact} />
    </div>
  );
}

export default Home;
