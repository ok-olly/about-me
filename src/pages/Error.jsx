import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

import Header from "../components/Header";

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-8 py-16">
        <p className="dark:text-white/90">앗 잘못 들어오셨어요!</p>
        <button
          onClick={() => navigate(-1)}
          className="text-black/75 dark:text-white/90 pointerhover:hover:underline"
        >
          <RiArrowGoBackFill className="mr-2 inline -translate-y-1" />
          <span>되돌아가기</span>
        </button>
      </div>
    </>
  );
}

export default Error;
