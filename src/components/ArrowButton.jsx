import { Link } from "react-router-dom";

function ArrowButton({ children, to }) {
  return (
    <Link
      to={to}
      className="text-base underline underline-offset-8 transition-all hover:text-white focus:outline-violet-500"
    >
      &rarr; {children}
    </Link>
  );
}

export default ArrowButton;
