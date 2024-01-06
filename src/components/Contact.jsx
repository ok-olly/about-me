import { forwardRef } from "react";
import EmailForm from "./EmailForm";

// eslint-disable-next-line react/display-name
const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="mb-16 border-t-[1px] border-black/10 px-6 pt-16 dark:border-white/50 sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-24"
    >
      <div className="mb-16 dark:text-white/90 lg:mb-0">
        <h4 className="mobile-h4 mb-8">
          {/* Got a project in mind? */}
          궁금한 점이 있나요?
        </h4>
        <p>제공된 폼을 이용해 메세지를 남겨주세요 ✉️</p>
      </div>

      <div className="lg:w-1/2 lg:pl-4">
        <EmailForm />
      </div>
    </section>
  );
});

export default Contact;
