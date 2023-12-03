import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5 dark:bg-neutral-950/50">
      앗 잘못 들어오셨어요!
      <button onClick={() => navigate(-1)} className="flex items-center gap-1">
        <RiArrowGoBackFill />
        <span>되돌아가기</span>
      </button>
    </div>
  );
}

export default Error;
