import { Link } from "react-router-dom";
import Heading from "./Heading";

const style =
  "mt-3 rounded-xl border-4 border-dashed border-white p-2 hover:border-violet-300 hover:bg-violet-500 hover:text-white  active:border-violet-500 active:bg-violet-700 dark:border-neutral-300 dark:hover:bg-violet-900 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between";

function Work() {
  return (
    <div className="rounded-xl bg-neutral-50/50 p-5 dark:bg-neutral-950/50 sm:w-2/3 md:w-1/2 md:p-7 lg:w-2/5">
      <div className="mb-5">
        <Heading>Work</Heading>
      </div>

      <div className="text-center">
        <Link to="/project/ollyscloset">
          <div className={style}>
            <h2>Olly&apos;s Closet</h2>
            <span className="text-sm sm:text-base">E-Commerce Store</span>
          </div>
        </Link>

        <Link to="/project/todolist">
          <div className={style}>
            <h2>To-Do List</h2>
            <span className="text-sm sm:text-base">Web App</span>
          </div>
        </Link>

        <Link to="/project/singstreet">
          <div className={style}>
            <h2>Sing Street</h2>
            <span className="text-sm sm:text-base">
              Movie Filming Location Map
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Work;
