import { forwardRef } from "react";
import EmailForm from "./EmailForm";

// eslint-disable-next-line react/display-name
const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="mb-16 border-t-[1px] border-black/10 px-6 pt-16"
    >
      <div className="mb-16">
        <h4 className="mobile-h4 mb-8">Got a project in mind?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae
          explicabo commodi deleniti sunt dicta deserunt
        </p>
      </div>

      <EmailForm />
    </section>
  );
});

export default Contact;
