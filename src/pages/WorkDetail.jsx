import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

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

import {
  IoMoonOutline,
  IoSunnyOutline,
  IoMenuOutline,
  IoArrowBackOutline,
} from "react-icons/io5";

import Heading from "../components-v1/Heading";
import SimpleSlider from "../components/SimpleSlider";
import Contact from "../components/Contact";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const work = [
  {
    id: "ollyscloset",
    title: "Olly's Closet",
    desc1: "E-Commerce Store (Responsive)",
    desc2:
      "Supabase와 React를 활용하여 만든 온라인 쇼핑몰입니다. 실제로 명품 구매대행 회사에 근무하던 시절 직접 촬영했던 사진을 사용해서 프로젝트 동안 그때의 추억이 새록새록 떠올랐어요. 아직은 결제 기능이 구현되어 있지 않지만, 제가 나중에 사업을 하게 된다면 추가될 수도..? 앞으로 더 많은 기능과 업데이트가 기다리고 있습니다. 기대해 주세요!",
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
      { id: 1, logo: <SiReact data-tooltip-id="react-icon" /> },
      { id: 2, logo: <SiRedux data-tooltip-id="redux-icon" /> },
      { id: 3, logo: <SiSupabase data-tooltip-id="supabase-icon" /> },
      { id: 4, logo: <SiJavascript data-tooltip-id="javascript-icon" /> },
      {
        id: 5,
        logo: <SiStyledcomponents data-tooltip-id="styled-components-icon" />,
      },
      { id: 6, logo: <SiVite data-tooltip-id="vite-icon" /> },
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
      "자바스크립트만으로 만들었던 투두리스트 앱을 리액트로 다시 만들어봤습니다. 상단에서 날짜와 시간을 확인할 수 있습니다. 목록 작성은 물론 수정, 삭제 및 체크 표시가 가능하며 로컬 스토리지를 사용하여 로그아웃하기 전까지는 작성한 내용이 유지됩니다. 사용자의 위치에 따라 날씨 정보가 제공되고 화면을 새로 고칠 때마다 새로운 명언을 볼 수 있습니다.",
    img: ["/img/todolist/desktop01.png", "/img/todolist/desktop02.png"],
    tool: [
      { id: 1, logo: <SiReact data-tooltip-id="react-icon" /> },
      { id: 2, logo: <SiJavascript data-tooltip-id="javascript-icon" /> },
      { id: 3, logo: <SiTailwindcss data-tooltip-id="tailwind-icon" /> },
      { id: 4, logo: <SiVite data-tooltip-id="vite-icon" /> },
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
      "Leaflet과 JavaScript를 활용하여 만든 지도 앱입니다. 제가 좋아하는 영화 Sing Street의 촬영지를 담고 있습니다. 방문한 장소는 visited 버튼을 클릭하여 지도에 표시할 수 있습니다. 장소를 방문할 때마다 방문율을 나타내는 프로그레스 바가 추가될 예정이며 추후 다른 영화 버전도 만나보실 수 있습니다 😊",
    img: ["/img/singstreet/desktop01.png", "/img/singstreet/mobile.png"],
    tool: [
      { id: 1, logo: <SiJavascript data-tooltip-id="javascript-icon" /> },
      { id: 2, logo: <SiLeaflet data-tooltip-id="leaflet-icon" /> },
      { id: 3, logo: <SiHtml5 data-tooltip-id="html-icon" /> },
      { id: 4, logo: <SiSass data-tooltip-id="sass-icon" /> },
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
      <header className="border-b-[1px] border-black/10">
        <div className="flex items-center justify-between px-6 py-4">
          <ul>
            <li
              onClick={() =>
                navigate("/", {
                  state: {
                    location: "home",
                  },
                })
              }
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

      <div className="px-6 py-16">
        <div className="w-full">
          <SimpleSlider image={data.img} />
        </div>

        <div className="flex flex-col gap-12 py-16">
          <div>
            <h1 className="mobile-h3-bold mb-6">{data.title}</h1>
            <p>{data.desc2}</p>
          </div>

          <div>
            <h5 className="mobile-h5 mb-6">Key Features</h5>
            <ul className="list-outside list-disc pl-6">
              {data.features.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mobile-h5 mb-6">Tools</h5>

            <div className="flex flex-wrap gap-2">
              {data.tool.map((t) => (
                <div
                  key={t.id}
                  className="inline-block rounded-lg bg-black/10 px-4 py-2"
                >
                  {t.logo}
                </div>
              ))}
              {/*  */}
              {/* 로고 넣을 방법,, */}
              {/*  */}
              <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                <SiReact className="mr-4 inline -translate-y-0.5 text-2xl text-[#61DAFB]" />
                <span className="">React</span>
              </div>
              <div className="inline-block rounded-lg bg-black/10 px-4 py-2">
                <SiRedux className="mr-4 inline -translate-y-0.5 text-2xl text-[#764ABC]" />
                <span className="">Redux</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
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

            <button type="button" className="self-start text-black/50">
              <IoArrowBackOutline className="mr-2 inline -translate-y-0.5" />
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
      {/* <Footer ref={refContact} /> */}
      {/* <footer ref={refContact}>
          <Footer />
        </footer> */}

      <Contact ref={refContact} />

      <footer className="px-6 py-8">
        <nav className="mb-3">
          <ul className="mobile-h6-small-regular flex justify-between">
            <li
              className="pointerhover:hover:scale-x-105 cursor-pointer"
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
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
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
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
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
              className="pointerhover:hover:font-semibold pointerhover:hover:text-primary cursor-pointer"
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

export default WorkDetail;
