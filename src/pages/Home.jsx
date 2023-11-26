import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-3 text-center text-neutral-700">
      <h1 className="leading-relaxed">
        <p>안녕하세요!</p>
        <p>
          프론트엔드 개발자{" "}
          <span className="text font-semibold text-neutral-950 underline decoration-wavy underline-offset-8">
            이정옥
          </span>
          입니다
        </p>
      </h1>

      <div className="mt-5 inline-block text-base hover:text-white">
        <Link to="/about">&rarr; 더 알아보기</Link>
      </div>
    </div>
  );
}

export default Home;
