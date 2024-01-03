import { forwardRef } from "react";
import EmailForm from "./EmailForm";

// eslint-disable-next-line react/display-name
const Footer = forwardRef(
  ({ handleMove, refHome, refAbout, refProject, refContact }, ref) => {
    return (
      <footer ref={ref} className="border-t-[1px] border-black/10 pt-16">
        <section className="mb-16 px-6">
          <div className="mb-16">
            <h4 className="mobile-h4 mb-8">Got a project in mind?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quae explicabo commodi deleniti sunt dicta deserunt
            </p>
          </div>

          <EmailForm />
        </section>

        <section>
          <nav>
            <ul>
              <li onClick={() => handleMove(refHome)}>😇</li>
              <li onClick={() => handleMove(refAbout)}>about</li>
              <li onClick={() => handleMove(refProject)}>project</li>
              <li onClick={() => handleMove(refContact)}>contact</li>
            </ul>
          </nav>
        </section>
      </footer>
    );
  },
);

export default Footer;
