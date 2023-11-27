import { Link } from "react-router-dom";

function Nav() {
  const style =
    "mb-5 text-center text-5xl font-bold uppercase italic tracking-widest hover:not-italic hover:text-lime-50 hover:underline hover:decoration-wavy hover:underline-offset-8";

  return (
    <nav className="animate-bg-gradient absolute left-0 top-0 z-20 h-screen w-screen bg-gradient-to-br from-violet-300 via-amber-200 to-lime-500 bg-[length:400%_400%] font-mono">
      <ul className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2">
        <li className={style}>
          <Link to="/" className="block">
            Home
          </Link>
        </li>
        <li className={style}>
          <Link to="/about" className="block">
            About
          </Link>
        </li>
        <li className={style}>
          <Link to="/work" className="block">
            Work
          </Link>
        </li>
        <li className={style}>
          <Link to="/contact" className="block">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;