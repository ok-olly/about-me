import Heading from "../components/Heading";

function About() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5 dark:bg-neutral-950/50 md:flex-row md:gap-7 md:p-7">
      <img
        src="./img/profile.jpg"
        className="w-72 rounded-xl border-4 border-solid border-white dark:brightness-75 md:rounded-full"
      />

      <div className="w-72">
        <div className="mb-5 self-start">
          <Heading>About</Heading>
        </div>

        <div className="tracking-wide">
          안녕하세요. 프론트엔드 개발자 이정옥입니다. React와 JavaScript를 주로
          사용하고 있습니다. 문제 해결에 높은 흥미를 갖고 있으며 끊임없는 학습
          의지로 효과적인 웹 솔루션을 창출하는 데 전념하고 있습니다. 다른 분들과
          함께 작업해 볼 기회를 찾고 있습니다.
        </div>
      </div>
    </div>
  );
}

export default About;
