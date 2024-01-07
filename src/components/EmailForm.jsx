import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import PrimaryBtn from "./PrimaryBtn";
import { FaRegPaperPlane } from "react-icons/fa";

function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_API_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success("Thanks for your interest 😊");
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false);
          toast.error("Sorry. Something went wrong...😔");
          console.log(error.text);
        },
      );
  };

  return (
    <div>
      {isLoading ? (
        <div className="relative h-80 dark:bg-white/90">
          <span className="loader"></span>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex items-center">
            <label htmlFor="to" className="mobile-h6 w-1/5 dark:text-white/90">
              TO
            </label>
            <input
              id="to"
              className="w-4/5 rounded-lg bg-black/10 p-3.5 dark:bg-white/90"
              value="olivia.jeongok.lee@gmail.com"
              readOnly
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="email"
              className="mobile-h6 w-1/5 dark:text-white/90"
            >
              FROM
            </label>
            <input
              id="email"
              className="w-4/5 rounded-lg bg-black/10 p-3.5 dark:bg-white/90"
              type="email"
              name="user_email"
              placeholder="Your email address"
              required
            />
          </div>

          <input
            className="rounded-lg bg-black/10 p-3.5 dark:bg-white/90"
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />

          <textarea
            className="rounded-lg bg-black/10 p-3.5 dark:bg-white/90"
            name="message"
            placeholder="Message"
            rows="5"
            required
          />

          <PrimaryBtn isDisabled={isLoading} isStretch={true}>
            {/* Send message */}
            메세지 전송하기
            <FaRegPaperPlane />
          </PrimaryBtn>
        </form>
      )}
    </div>
  );
}

export default EmailForm;
