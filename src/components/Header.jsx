import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [location]);

  const beforeStyle = `before:left-0 before:absolute before:mb-1 before:h-1.5 before:w-8 before:rounded before:bg-neutral-800 before:duration-500 dark:before:bg-neutral-300 ${
    showNav ? "before:rotate-[135deg] before:top-0" : "before:-top-2"
  }`;

  const afterStyle = `after:left-0 after:absolute after:h-1.5 after:w-8 after:rounded after:bg-neutral-800 after:duration-500 dark:after:bg-neutral-300 ${
    showNav ? "after:rotate-[-135deg] after:top-0" : "after:top-2"
  }`;

  const style = `${beforeStyle} ${afterStyle} relative h-1.5 w-8 rounded duration-500 ${
    showNav ? "bg-transparent" : "bg-neutral-800 dark:bg-neutral-300"
  } `;

  return (
    <header className="relative flex items-center justify-between self-stretch p-6">
      <div className="z-10">
        <Link to="/">
          <div className="cursor-pointer text-2xl">😇</div>
        </Link>
      </div>

      <div className="relative flex">
        <div className="absolute -top-2 right-12 z-10">
          <ThemeSwitcher />
        </div>
        <div
          className="z-30 flex cursor-pointer items-center"
          onClick={() => setShowNav((show) => !show)}
        >
          <div className={style}>&nbsp;</div>
        </div>
      </div>
      {showNav && <Nav />}
    </header>
  );
}

export default Header;
