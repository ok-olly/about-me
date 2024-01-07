import { Link, useNavigate, useParams } from "react-router-dom";

import {
  SiHtml5,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSupabase,
  SiVite,
  SiGithub,
  SiLeaflet,
  SiLinkedin,
} from "react-icons/si";

import { IoArrowBackOutline } from "react-icons/io5";

import SimpleSlider from "../components/SimpleSlider";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Contact from "../components/Contact";
import { useRef } from "react";

const work = [
  {
    id: "ollyscloset",
    title: "Olly's Closet",
    desc1: "E-Commerce Store (Responsive)",
    desc2:
      "React를 활용하여 만든 온라인 쇼핑몰입니다. 실제로 명품 구매대행 회사에 근무하던 시절 직접 촬영했던 사진을 사용했습니다. Supabase에 저장된 상품 정보를 받아와 화면에 보여주며 회원가입, 로그인, 회원정보 수정, 장바구니, 주문 기능을 구현했습니다.",
    img: [
      "/img/ollycloset/desktop01.png",
      "/img/ollycloset/desktop02.png",
      "/img/ollycloset/desktop03.png",
      "/img/ollycloset/desktop04.png",
      "/img/ollycloset/desktop05.png",
      "/img/ollycloset/desktop06.png",
      "/img/ollycloset/desktop07.png",
      "/img/ollycloset/mobile.png",
    ],
    tool: [
      {
        id: "React",
        logo: (
          <SiReact className="mr-4 inline -translate-y-0.5 text-2xl text-[#61DAFB]" />
        ),
      },
      {
        id: "Redux",
        logo: (
          <SiRedux className="mr-4 inline -translate-y-0.5 text-2xl text-[#764ABC]" />
        ),
      },

      {
        id: "Supabase",
        logo: (
          <SiSupabase className="mr-4 inline -translate-y-0.5 text-2xl text-[#3FCF8E]" />
        ),
      },
      {
        id: "JavaScript",
        logo: (
          <SiJavascript className="mr-4 inline -translate-y-0.5 text-2xl text-[#F7DF1E]" />
        ),
      },
      {
        id: "styled-components",
        logo: (
          <SiStyledcomponents className="mr-4 inline -translate-y-0.5 text-2xl text-[#DB7093]" />
        ),
      },
      {
        id: "Vite",
        logo: (
          <SiVite className="mr-4 inline -translate-y-0.5 text-2xl text-[#646CFF]" />
        ),
      },
    ],
    url1: "https://ollys-closet.netlify.app",
    url2: "https://github.com/ok-olly/olly-closet",
    features: [
      "React와 Supabase를 활용한 온라인 쇼핑몰 구축",
      "React Router와 Loader를 사용한 페이지 간의 내비게이션 및 데이터 로딩",
      "Redux를 활용한 회원 정보 데이터 관리",
      "Styled-Components를 사용한 스타일링과 디바이스에 따른 반응형 디자인 지원",
    ],
  },
  {
    id: "todolist",
    title: "To-Do List",
    desc1: "Web App",
    desc2:
      "JavaScript만으로 만들었던 투두리스트 앱을 React로 다시 만들어봤습니다. 상단에서 날짜와 시간을 확인할 수 있습니다. 목록 작성은 물론 수정, 삭제 및 체크 표시가 가능하며 로컬 스토리지를 사용하여 로그아웃하기 전까지는 작성한 내용이 유지됩니다. 사용자의 위치에 따라 날씨 정보가 제공되고 화면을 새로 고칠 때마다 새로운 명언을 확인할 수 있습니다.",
    img: ["/img/todolist/desktop01.png", "/img/todolist/desktop02.png"],
    tool: [
      {
        id: "React",
        logo: (
          <SiReact className="mr-4 inline -translate-y-0.5 text-2xl text-[#61DAFB]" />
        ),
      },
      {
        id: "JavaScript",
        logo: (
          <SiJavascript className="mr-4 inline -translate-y-0.5 text-2xl text-[#F7DF1E]" />
        ),
      },
      {
        id: "Tailwind CSS",
        logo: (
          <SiTailwindcss className="mr-4 inline -translate-y-0.5 text-2xl text-[#06B6D4]" />
        ),
      },
      {
        id: "Vite",
        logo: (
          <SiVite className="mr-4 inline -translate-y-0.5 text-2xl text-[#646CFF]" />
        ),
      },
    ],
    url1: "https://teenytiny-todolist.netlify.app",
    url2: "https://github.com/ok-olly/todolist",
    features: [
      "작성 내용은 localStorage에 저장",
      "Weather API를 사용하여 사용자의 위치에 따른 날씨 정보 제공",
      "새로고침할 때마다 나타나는 새로운 격언",
    ],
  },
  {
    id: "singstreet",
    title: "Sing Street",
    desc1: "Movie Filming Location Map (Responsive)",
    desc2:
      "Leaflet과 JavaScript를 활용하여 만든 지도 앱입니다. 제가 좋아하는 영화 Sing Street의 촬영지를 담고 있습니다. 방문한 장소는 visited 버튼을 클릭하여 지도에 표시할 수 있습니다. 다른 영화 정보와 기능을 추가하여 모바일 앱으로 만들어볼 예정입니다.",
    img: ["/img/singstreet/desktop01.png", "/img/singstreet/mobile.png"],
    tool: [
      {
        id: "JavaScript",
        logo: (
          <SiJavascript className="mr-4 inline -translate-y-0.5 text-2xl text-[#F7DF1E]" />
        ),
      },
      {
        id: "Leaflet",
        logo: (
          <SiLeaflet className="mr-4 inline -translate-y-0.5 text-2xl text-[#199900]" />
        ),
      },

      {
        id: "Sass",
        logo: (
          <SiSass className="mr-4 inline -translate-y-0.5 text-2xl text-[#CC6699]" />
        ),
      },
      {
        id: "HTML5",
        logo: (
          <SiHtml5 className="mr-4 inline -translate-y-0.5 text-2xl text-[#E34F26]" />
        ),
      },
    ],
    url1: "https://singstreet-filming-locations.netlify.app",
    url2: "https://github.com/ok-olly/sing-street",
    features: [
      "영화 촬영지 위치 정보 안내",
      "방문한 장소는 별도 표시 가능",
      "localStorage에 저장하여 유지되는 방문 장소",
      "SCSS를 사용한 스타일링과 디바이스에 따른 반응형 디자인 지원",
    ],
  },
];

function WorkDetail() {
  const param = useParams();

  const [data] = work.filter((project) => project.id === param.id);

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
              {/* <div className="flex rounded-full bg-black/5 p-1">
              <div className="rounded-full bg-black/10 px-2 py-1">
                <IoMoonOutline />
              </div>
              <div className="rounded-full px-2 py-1">
                <IoSunnyOutline />
              </div>
            </div> */}
            </li>
            {/* <li>
            <IoMenuOutline className="cursor-pointer text-2xl pointerhover:hover:text-primary" />
          </li> */}

            <li className="mobile-h6-small hidden text-primary dark:text-darkPrimary xl:inline-block">
              olivia.jeongok.lee@gmail.com
            </li>
            <li className="hidden xl:inline-block">
              <Link to="https://github.com/ok-olly">
                <SiGithub className="cursor-pointer  pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
              </Link>
            </li>
            <li className="hidden xl:inline-block">
              <Link to="https://www.linkedin.com/in/olivia-jeongok-lee">
                <SiLinkedin className="cursor-pointer  pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-6 py-16 dark:text-white/90 sm:px-12 lg:p-24">
        <div className="w-full">
          <SimpleSlider image={data.img} />
        </div>

        <div className="flex flex-col gap-12 pt-16 lg:gap-16 lg:pt-32 xl:flex-row">
          <div className="xl:w-1/2">
            <div>
              <h1 className="mobile-h3-bold mb-6 lg:mb-12">{data.title}</h1>
              <p className="indent-2">{data.desc2}</p>
            </div>

            <div className="mt-12 hidden gap-6 xl:flex xl:flex-col">
              <div className="flex flex-col items-start gap-6 2xl:flex-row">
                <PrimaryBtn
                  isStretch={false}
                  handleClick={() =>
                    window.open(data.url1, "_blank", "noopener, noreferrer")
                  }
                >
                  <span>🛍️</span>
                  <span>View project</span>
                </PrimaryBtn>

                <SecondaryBtn
                  handleClick={() =>
                    window.open(data.url2, "_blank", "noopener, noreferrer")
                  }
                >
                  <SiGithub />
                  <span>Visit github</span>
                </SecondaryBtn>
              </div>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="self-start text-black/50 dark:text-white/90 pointerhover:hover:underline"
              >
                <IoArrowBackOutline className="mr-2 inline -translate-y-0.5" />
                <span>Go back</span>
              </button>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="mb-12">
              <h5 className="mobile-h5 mb-6">Key Features</h5>
              <ul className="list-outside list-disc pl-6">
                {data.features.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mobile-h5 mb-6">Tools</h5>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {data.tool.map((t) => (
                  <div
                    key={t.id}
                    className="inline-block rounded-lg bg-black/10 px-4 py-2 dark:bg-white/10"
                  >
                    {t.logo}
                    <span>{t.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:px-48 xl:hidden">
            <div className="mb-6 flex flex-col gap-6">
              <PrimaryBtn
                isStretch={true}
                handleClick={() =>
                  window.open(data.url1, "_blank", "noopener, noreferrer")
                }
              >
                <span>🛍️</span>
                <span>View project</span>
              </PrimaryBtn>

              <SecondaryBtn
                handleClick={() =>
                  window.open(data.url2, "_blank", "noopener, noreferrer")
                }
              >
                <SiGithub />
                <span>Visit github</span>
              </SecondaryBtn>
            </div>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="self-start text-black/50 dark:text-white/90 pointerhover:hover:underline"
            >
              <IoArrowBackOutline className="mr-2 inline -translate-y-0.5" />
              <span>Go back</span>
            </button>
          </div>
        </div>
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

          {/* <div className="flex flex-col gap-3"> */}
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
            <li>
              <Link to="https://github.com/ok-olly">
                <SiGithub className="cursor-pointer pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/olivia-jeongok-lee">
                <SiLinkedin className="cursor-pointer pointerhover:hover:text-primary pointerhover:dark:hover:text-darkPrimary" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default WorkDetail;
