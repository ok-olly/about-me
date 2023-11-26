import { Link } from "react-router-dom";

function About() {
  return (
    <div className="px-3">
      <div className="flex flex-col items-center gap-3 text-base">
        <img
          src="img/profile.jpg"
          className="w-72 rounded-xl border-4 border-solid border-white"
        />
        <span className="self-start text-2xl font-semibold uppercase underline decoration-wavy underline-offset-8">
          About
        </span>
        <span className="w-72 leading-relaxed tracking-wide">
          안녕하세요. 저는 이정옥이라고 합니다. React와 JavaScript를 기반으로한
          front-end 개발을 하고 있습니다. 새로운 기술에 대한 학습에 열려 있으며,
          항상 최신 트렌드와 개발 도구에 관심을 가지고 있습니다. 음악, 영화,
          패션, 여행 등 이미 좋아하는 게 많은데 코딩까지 좋아하게된 저...
          좋아하는 일에 진심인 저와 같이 일해보실래요?
        </span>
        <Link to="#" className="self-start hover:text-white">
          &rarr; 이력서 보기
        </Link>
      </div>
    </div>
  );
}

export default About;
