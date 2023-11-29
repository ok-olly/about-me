import { Link } from "react-router-dom";
import Heading from "../components/Heading";

function Work() {
  return (
    <div className="px-3">
      <div className="rounded-xl bg-neutral-50/50 p-5">
        <div className="mb-5">
          <Heading>Work</Heading>
        </div>

        <div className="text-center">
          <Link to="/work/ollyscloset">
            <div className="rounded-xl border-2 border-dashed border-white p-2">
              <h2>Olly&apos;s Closet</h2>

              <span className="text-sm">E-Commerce Store</span>
            </div>
          </Link>

          <Link to="/work/todolist">
            <div className="mt-3 rounded-xl border-2 border-dashed border-white p-2">
              <h2>To-Do List</h2>
              <span className="text-sm">Web App</span>
            </div>
          </Link>

          <Link to="/work/singstreet">
            <div className="mt-3 rounded-xl border-2 border-dashed border-white p-2">
              <h2>Sing Street</h2>
              <span className="text-sm">Movie Filming Location Map</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
