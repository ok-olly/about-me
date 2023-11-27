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
  // SiMysql,
  // SiLeaflet,
  // SiSupabase,
} from "react-icons/si";

import Heading from "../components/Heading";
import ArrowButton from "../components/ArrowButton";

function Home() {
  return (
    <div className="relative flex w-full flex-col gap-5 px-3 text-center">
      <div className="leading-relaxed">
        <p>안녕하세요!</p>

        <div className="flex flex-wrap justify-center">
          <span>프론트엔드 개발자 &nbsp;</span>
          <Heading>이정옥</Heading>
          <span>입니다</span>
        </div>
      </div>

      <div className="absolute -top-10 left-1/2 grid w-80 -translate-x-1/2 grid-cols-3 justify-items-center gap-y-9 px-3 text-5xl opacity-[.3] sm:-top-20 sm:w-1/2 sm:gap-y-20">
        <SiHtml5 />
        <SiCss3 />
        <SiSass />
        <SiStyledcomponents />
        <SiTailwindcss />
        <SiJavascript />
        <SiReact />
        <SiRedux />
        <SiGit />

        {/* <SiMysql />
        <SiLeaflet />
        <SiSupabase /> */}
      </div>

      <div className="z-10">
        <ArrowButton to="/about">더 알아보기</ArrowButton>
      </div>
    </div>
  );
}

export default Home;
