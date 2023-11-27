import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function EmailForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_API_PUBLIC_KEY,
      )
      .then(
        (result) => {
          toast.success("Thanks for your interest 😊");
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          toast.error("Sorry. Something went wrong...😔");
          console.log(error.text);
        },
      );
  };

  return (
    <div className="mt-2 w-72 text-base">
      {/* <p className="mb-2">To: olivia.jeongok.lee@gmail.com</p> */}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        <div className="flex items-center">
          <label htmlFor="to" className="w-1/5">
            To:
          </label>
          <input
            id="to"
            className="w-4/5 p-1 focus:outline-violet-500"
            value="olivia.jeongok.lee@gmail.com"
            readOnly
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-1/5">
            From:
          </label>
          <input
            id="email"
            className="w-4/5 p-1 focus:outline-violet-500"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
        </div>

        <input
          className="p-1 focus:outline-violet-500"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />

        <textarea
          className="p-1 focus:outline-violet-500"
          name="message"
          placeholder="Message"
          rows="7"
          required
        />

        <input
          type="submit"
          value="Send"
          className="cursor-pointer rounded-xl border-4 border-solid border-white p-1 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-500 hover:text-white hover:shadow-xl focus:outline-violet-500 active:translate-y-0 active:border-violet-500 active:bg-violet-700"
        />
      </form>
    </div>
  );
}

export default EmailForm;
