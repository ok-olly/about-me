import { Link, useParams } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
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

const work = [
  {
    id: "ollyscloset",
    title: "Olly's Closet ↗",
    desc1: "E-Commerce Store (Responsive)",
    desc2:
      "옷이 좋아서 다녔던 구매대행 회사에서 만난 친구들은 제게 코딩을 배워보라고 추천했었죠. 그리고 제가 해냈습니다 😊 프로젝트를 진행하면서 제가 직접 촬영한 사진들을 활용하여 그때의 추억이 새록새록 떠오르는 기분이었어요. 제 취향과 경험을 담아 완성한 프로젝트인 만큼 많은 정성을 쏟았습니다. 아직은 결제 기능이 구현되어 있지 않지만, 제가 나중에 사업을 하게 된다면 추가될 수도..? 앞으로 더 많은 기능과 업데이트가 기다리고 있습니다. 기대해 주세요!",
    img: [
      "/img/ollycloset/desktop01.png",
      "/img/ollycloset/desktop02.png",
      "/img/ollycloset/desktop03.png",
      "/img/ollycloset/desktop04.png",
      "/img/ollycloset/desktop05.png",
      "/img/ollycloset/desktop06.png",
      "/img/ollycloset/desktop07.png",
      // "/img/ollycloset/mobile01.png",
      // "/img/ollycloset/mobile02.png",
      // "/img/ollycloset/mobile03.png",
    ],
    tool: [
      { id: 1, logo: <SiReact /> },
      { id: 2, logo: <SiRedux /> },
      { id: 3, logo: <SiSupabase /> },
      { id: 4, logo: <SiJavascript /> },
      { id: 5, logo: <SiStyledcomponents /> },
      { id: 6, logo: <SiVite /> },
    ],
    url1: "https://ollys-closet.netlify.app",
    url2: "https://github.com/ok-olly/olly-closet",
  },
  {
    id: "todolist",
    title: "To-Do List ↗",
    desc1: "Web App (Responsive)",
    desc2:
      "바닐라 자바스크립트만으로 만들었던 투두리스트 앱을 리액트로 다시 만들어봤습니다. ",
    img: [],
    tool: [
      { id: 1, logo: <SiReact /> },
      { id: 2, logo: <SiJavascript /> },
      { id: 3, logo: <SiTailwindcss /> },
      { id: 4, logo: <SiVite /> },
    ],
    url1: "https://teenytiny-todolist.netlify.app",
    url2: "https://github.com/ok-olly/todolist",
  },
  {
    id: "singstreet",
    title: "Sing Street ↗",
    desc1: "Movie Filming Location Map (Responsive)",
    desc2: "",
    img: [],
    tool: [
      { id: 1, logo: <SiJavascript /> },
      { id: 2, logo: <SiLeaflet /> },
      { id: 3, logo: <SiHtml5 /> },
      { id: 4, logo: <SiSass /> },
    ],
    url1: "https://singstreet-filming-locations.netlify.app",
    url2: "https://github.com/ok-olly/sing-street",
  },
];

function WorkDetail() {
  const param = useParams();

  const [data] = work.filter((project) => project.id === param.id);

  return (
    <>
      <div className="px-3">
        <div className="rounded-xl bg-neutral-50/50 p-5">
          <div className="mx-auto mb-8 w-72">
            <SimpleSlider image={data.img} />
          </div>

          <div className="w-72">
            <div className="mb-5 flex items-center justify-between">
              <Link to={data.url1} data-tooltip-id="my-tooltip-1">
                <Heading>{data.title}</Heading>
              </Link>
              <Link to={data.url2}>
                <SiGithub
                  className="text-2xl hover:text-white"
                  data-tooltip-id="my-tooltip-2"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm">{data.desc1}</span>

              <div className="flex gap-2">
                {data.tool.map((t) => (
                  <span key={t.id}>{t.logo}</span>
                ))}
              </div>

              <div className="tracking-wide">{data.desc2}</div>
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content={data.url1}
        variant="success"
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        content={data.url2}
        variant="success"
      />
    </>
  );
}

export default WorkDetail;
