import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { contactLinks } from "../constants";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(!transition);
    setTransition(!transition);

    console.log(transition);
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);
  const [contactLinkHover, setContactLinkHover] = useState(false);

  //   toast.configure(); //per utilizzare toast bisogna prima invocare questa funzione

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .sendForm(
        "service_portfolio", //serviceID
        "template_npy0qxg", //templateID
        e.target, //FORM
        "KiK1oF2IBRWM_mwuJ" //publicKEY
      )
      .then(
        (result) => {
          setloading(false);
          alert("Email inviata con successo");
          console.log(result.text);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          alert("Invio Email non riuscito");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1
        className={`${
          transition ? "title-transition" : "opacity-0"
        } text-3xl left-0 absolute text-[5rem] top-0 text-fuchsia-400`}
      >
        Contact
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${
          transition ? "project-transition" : "opacity-0"
        } pb-[20rem] border-b-white border-b-2 max-h-[50%] flex gap-8 mt-20 -ml-10 flex-col w-[40rem]`}
      >
        <div className="flex justify-between h-[14rem]">
          <div className="flex flex-col justify-between h-[14rem]">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
                      border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
                      border-none font-medium"
              />
            </label>
          </div>

          <div className="flex flex-col justify-between ">
            <label className="flex flex-col max-h-[100%]">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                required
                rows="7"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
                      border-none font-medium max-h-[100%] min-h-[5rem]"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="background cursor-default">
          <span className="button cursor-pointer">
            <svg>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            {loading ? "Sending" : "Send"}
          </span>
        </button>

        {/* <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary 
                rounded-xl"
        >
          
        </button> */}
      </form>
      {/* <div
        className={`${
          transition ? "rounded-div-transition" : "opacity-0"
        } w-[40rem] mt-3`}
      >
        <span className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="1.5rem"
            className="text-slate-100"
          >
            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
          </svg>
          https://www.linkedin.com/in/roberto-tursi/
        </span>

        <span className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-slate-100 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          RobertoTursi00@gmail.com
        </span>
      </div> */}
      <div
        className={`${
          transition ? "rounded-div-transition" : "opacity-0"
        } w-[40rem] mt-3`}
      >
        <p className="text-slate-100 font-light text-2xl text-center">Or</p>
        <div className="flex justify-between mt-6 ">
          {contactLinks.map((contact) => (
            <div key={contact.id} className="flex">
              <ArrowTopRightOnSquareIcon className="icon-style" />
              <a
                target="blank"
                href={contact.href}
                className="text-slate-100 font-bold inline-block"
                onMouseOver={() => setContactLinkHover(contact.title)}
                onMouseLeave={() => setContactLinkHover("")}
              >
                <i>{contact.title}</i>
                <div
                  className={`${
                    contactLinkHover === contact.title
                      ? "email-hover-animation"
                      : "w-0 transition-all duration-1000"
                  } border-b-4`}
                />
                {/* <div
                  className={`${
                    mailHover 
                      ? "email-hover-animation"
                      : "w-0 transition-all duration-1000"
                  } border-b-4`}
                /> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
