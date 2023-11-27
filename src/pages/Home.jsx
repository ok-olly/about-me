import Heading from "../components/Heading";
import ArrowButton from "../components/ArrowButton";

function Home() {
  return (
    <div className="px-3 text-center">
      <div className="leading-relaxed">
        <p>안녕하세요!</p>

        <div className="flex flex-wrap justify-center">
          <span>프론트엔드 개발자 &nbsp;</span>
          <Heading>이정옥</Heading>
          <span>입니다</span>
        </div>
      </div>

      <div className="mt-5">
        <ArrowButton to="/about">더 알아보기</ArrowButton>
      </div>
    </div>
  );
}

export default Home;
