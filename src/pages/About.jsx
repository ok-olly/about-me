import Heading from "../components/Heading";
import ArrowButton from "../components/ArrowButton";

function About() {
  return (
    // <div className="px-3">
    <div className="flex flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5 md:flex-row md:gap-7 md:p-7">
      <img
        src="./img/profile.jpg"
        className="w-72 rounded-xl border-4 border-solid border-white md:rounded-full"
      />

      <div className="w-72">
        <div className="mb-5 self-start">
          <Heading>About</Heading>
        </div>

        <div className="tracking-wide">
          안녕하세요. 저는 이정옥이라고 합니다. React와 JavaScript를 기반으로한
          front-end 개발을 하고 있습니다. 새로운 기술에 대한 학습에 열려 있으며,
          항상 최신 트렌드와 개발 도구에 관심을 가지고 있습니다. 음악, 영화,
          패션, 여행 등 이미 좋아하는 게 많은데 코딩까지 좋아하게된 저...
          좋아하는 일에 진심인 저와 같이 일해보실래요?
        </div>

        <div className="self-start">
          <ArrowButton to="#">이력서 보기</ArrowButton>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
