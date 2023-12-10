import { Link, useParams } from "react-router-dom";
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
} from "react-icons/si";

import Heading from "../components/Heading";
import SimpleSlider from "../components/SimpleSlider";
import Tooltips from "../components/Tooltips";

const work = [
  {
    id: "ollyscloset",
    title: "Olly's Closet ↗",
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
    title: "To-Do List ↗",
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
    title: "Sing Street ↗",
    desc1: "Movie Filming Location Map (Responsive)",
    desc2:
      "Leaflet과 JavaScript를 활용하여 만든 지도 앱입니다. 제가 좋아하는 영화 Sing Street의 촬영지를 담고 있습니다. 방문한 장소는 visited 버튼을 클릭하여 지도에 표시할 수 있습니다. 장소를 방문할 때마다 방문율을 나타내는 프로그레스 바가 추가될 예정이며 추후 다른 영화 버전도 만나보실 수 있습니다 😊",
    img: ["/img/singsteet/desktop01.png", "/img/singsteet/mobile.png"],
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

  return (
    <>
      <div className="rounded-xl bg-neutral-50/50 p-5 dark:bg-neutral-950/50 md:p-7">
        <div className="mx-auto mb-8 w-72 md:mb-7 md:w-[500px] lg:w-[600px]">
          <SimpleSlider image={data.img} />
        </div>

        <div className="w-72 md:w-[500px] lg:w-[600px]">
          <div className="mb-5 flex items-center justify-between">
            <Link to={data.url1} data-tooltip-id="my-tooltip-1">
              <Heading>{data.title}</Heading>
            </Link>
            <Link to={data.url2}>
              <SiGithub className="text-2xl" data-tooltip-id="my-tooltip-2" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="md:flex md:items-center md:justify-between">
              <span className="text-sm">{data.desc1}</span>

              <div className="flex gap-2">
                {data.tool.map((t) => (
                  <span key={t.id}>{t.logo}</span>
                ))}
              </div>
            </div>

            <div className="h-60 overflow-scroll">
              <div className="tracking-wide">{data.desc2}</div>

              <h3 className="my-3 text-neutral-950 underline decoration-double underline-offset-4 dark:text-neutral-200">
                Key Features
              </h3>
              <ul className="list-outside list-disc pl-4">
                {data.features.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Tooltips url1={data.url1} url2={data.url2} />
    </>
  );
}

export default WorkDetail;
