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
} from "react-icons/si";

import { IoArrowDownOutline, IoArrowForwardOutline } from "react-icons/io5";

import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import Header from "../components/Header";

function Home() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProject = useRef(null);

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
      handleMove(
        state.location === "home"
          ? refHome
          : state.location === "about"
            ? refAbout
            : state.location === "project"
              ? refProject
              : refHome,
      );
      navigate("/", {}); // clear state
    }
  }, [state, navigate]);

  return (
    <>
      <Header ref={refHome} />

      <main>
        <section className="flex flex-col items-center gap-12 px-12 py-16">
          {/* <h3 className="mobile-h3 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-transparent">
            Hey there, I&apos;m Olivia.
          </h3>
          <h1 className="mobile-h1 text-center">Frontend Web Developer</h1> */}
          <h3 className="mobile-h3 dark:from-darkPrimary dark:to-darkSecondary inline-block bg-gradient-to-r from-primary to-secondary box-decoration-clone bg-clip-text text-center text-transparent">
            안녕하세요!
            <br />
            저는 프론트엔드 개발자
          </h3>

          <h1 className="mobile-h1 inline text-center dark:text-white/90">
            이정옥입니다
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
          className="dark:from-darkPrimary/50 dark:to-darkSecondary/50 flex flex-col gap-12 bg-gradient-to-r from-primary/50 to-secondary/50 py-16 dark:text-white/90"
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
              <h3 className="mobile-h3-bold">About Me</h3>

              <div className="indent-2">
                <p>
                  안녕하세요. 저는 React를 사용하는 프론트엔드 개발자
                  이정옥입니다. 만들고 싶은 것을 만들고 있어요. 특히 패션과
                  음악을 좋아해서 관련된 프로젝트에 제 애정을 가득 담았습니다.
                </p>
                <p>
                  최근에는 UI 디자인을 공부하며 Figma로 보고 계신 이 웹사이트를
                  새로 디자인했습니다. 그리고 모바일 앱에 관심이 생겨 React
                  Native를 공부하고 있습니다.
                </p>
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
          <div className="mb-16 px-12 text-center dark:text-white/90">
            <h3 className="mobile-h3-bold mb-6">My Projects</h3>
            <p>
              React와 JavaScript로 만든 프로젝트입니다. 자세히 알아보기 버튼을
              눌러보세요 😇
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
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
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
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
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
                  {/* <span>View case</span> */}
                  <span>자세히 알아보기</span>
                  <IoArrowForwardOutline className="ml-4 inline" />
                </SecondaryBtn>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
