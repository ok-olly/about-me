import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";

// eslint-disable-next-line react/display-name
const Header = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <header
      ref={ref}
      className="border-b-[1px] border-black/10 dark:border-white/50"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <ul className="mobile-h6-small-regular flex items-center gap-6">
          <li
            onClick={() =>
              navigate("/", {
                state: {
                  location: "home",
                },
              })
            }
            className="cursor-pointer text-2xl pointerhover:hover:scale-x-105"
          >
            😇
          </li>
          <li
            className="pointerhover:dark:hover:text-darkPrimary hidden cursor-pointer dark:text-white/90 sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary"
            onClick={() =>
              navigate("/", {
                state: {
                  location: "about",
                },
              })
            }
          >
            About Me
          </li>
          <li
            className="pointerhover:dark:hover:text-darkPrimary hidden cursor-pointer dark:text-white/90 sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary"
            onClick={() =>
              navigate("/", {
                state: {
                  location: "project",
                },
              })
            }
          >
            My Projects
          </li>
          <li
            className="pointerhover:dark:hover:text-darkPrimary hidden cursor-pointer dark:text-white/90 sm:inline-block pointerhover:hover:font-semibold pointerhover:hover:text-primary"
            onClick={() =>
              refContact.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <ThemeSwitcher />
            {/* <div className="flex rounded-full bg-black/5 p-1">
              <div className="rounded-full bg-black/10 px-2 py-1">
                <IoMoonOutline />
              </div>
              <div className="rounded-full px-2 py-1">
                <IoSunnyOutline />
              </div>
            </div> */}
          </li>
          {/* <li>
            <IoMenuOutline className="cursor-pointer text-2xl pointerhover:hover:text-primary" />
          </li> */}
        </ul>
      </div>
    </header>
  );
});

export default Header;
