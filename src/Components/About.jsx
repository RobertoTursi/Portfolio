import { useEffect, useState } from "react";

const About = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(!transition);
    setTransition(!transition);

    console.log(transition);
  }, []);

  return (
    <>
      <h1
        className={`${
          transition ? "title-transition" : "opacity-0"
        } border-white text-3xl left-0 absolute text-[5rem] top-0 `}
      >
        About
      </h1>
      {/* <h1
        className={`${
          !transition ? "title-transition" : ""
        } opacity-0 text-3xl -ml-10 text-[5rem] absolute top-0 text-red-700`}
      >
        About
      </h1> */}

      <div className="self-center h-full">
        <span
          className={`${
            transition ? "about-paragraph-transition-1" : "mt-[8rem] opacity-0"
          } block text-xl `}
        >
          I'm a 22 year old web developer from Puglia. Here to build something
          special and useful for the community.
        </span>{" "}
        <br />
        <span
          className={`${
            transition ? "about-paragraph-transition-2" : "mt-[2rem] opacity-0"
          } block text-xl `}
        >
          During my studies I gained experience in the development of responsive
          web applications, <br /> in the use and creation of databases, and, in
          general, in the implementation of complete websites, <br /> also
          thanks to the use of frameworks such as <b>React</b> and <b>Spring</b>
          .
        </span>{" "}
        <br />
        {/* <span
          className={`${
            transition ? "about-paragraph-transition-3" : "mt-[2rem] opacity-0"
          } block text-xl `}
        >
          I am, by nature, positive, ambitious and empathetic. I love working
          independently, but I also appreciate teamwork, I like helping others
          and sharing my knowledge in an exchange that guarantees constant
          professional growth.
        </span>{" "}
        <br /> */}
        <span
          className={`${
            transition ? "about-paragraph-transition-4" : "mt-[2rem] opacity-0"
          } block text-xl `}
        >
          If you want to know more about what I do, then contact me... I'm
          waiting for you
        </span>
      </div>
    </>
  );
};

export default About;
// import { useEffect, useState } from "react";

// const About = ({ title, color }) => {
//   const [transition, setTransition] = useState(false);
//   const [oldTitle, setOldTitle] = useState("");

//   useEffect(() => {
//     setOldTitle(title);
//   }, []);

//   useEffect(() => {
//     setTransition(!transition);
//     setTransition(!transition);

//     console.log(transition);
//   }, [title]);

//   return (
//     <>
//       <h1
//         className={`${
//           transition ? "title-transition" : "opacity-0"
//         } text-3xl -ml-10 absolute text-[5rem] top-0 ${color}`}
//       >
//         {title}
//       </h1>
//       <h1
//         className={`${
//           !transition ? "title-transition" : ""
//         } opacity-0 text-3xl -ml-10 text-[5rem] absolute top-0 ${color}`}
//       >
//         {title}
//       </h1>

//       {title === "About" && (
//         <div className="self-center ml-32 h-full">
//           <span
//             className={`${
//               transition
//                 ? "about-paragraph-transition-1"
//                 : "mt-[5rem] opacity-0"
//             } block`}
//           >
//             I'm passionate about programming, especially <b>web development</b>.
//           </span>{" "}
//           <br />
//           <span
//             className={`${
//               transition
//                 ? "about-paragraph-transition-2"
//                 : "mt-[2rem] opacity-0"
//             } block`}
//           >
//             During my studies I gained experience in the development of
//             responsive web applications, <br /> in the use and creation of
//             databases, and, in general, in the implementation of complete
//             websites, <br /> also thanks to the use of frameworks such as{" "}
//             <b>React</b> and <b>Spring</b>.
//           </span>{" "}
//           <br />
//           <span
//             className={`${
//               transition
//                 ? "about-paragraph-transition-3"
//                 : "mt-[2rem] opacity-0"
//             } block`}
//           >
//             I am, by nature, positive, ambitious and empathetic. I love working
//             independently, but I also appreciate teamwork, I like helping others
//             and sharing my knowledge in an exchange that guarantees constant
//             professional growth.
//           </span>{" "}
//           <br />
//           <span
//             className={`${
//               transition
//                 ? "about-paragraph-transition-4"
//                 : "mt-[2rem] opacity-0"
//             } block`}
//           >
//             I'm ready to give my contribution to the cause and continue to
//             explore this amazing world.
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default About;
