import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { circOut, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Start = () => {
  const [top, setTop] = useState(null);
  const [right, setRight] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [left, setLeft] = useState(0);
  const [randomN, setRandomN] = useState(null);
  const titolo1 = useRef();
  const [letter, setLetter] = useState(["ciao"]);
  const letterRef = useRef();
  const [indice, setIndice] = useState(false);
  const arrOfLetter = [];
  const [animationN, setAnimationN] = useState(false);
  const [counter, setCounter] = useState(0);
  const [nomr, setNomr] = useState(0);
  const [bool, setBool] = useState(true);

  const arr = [
    "T",
    "h",
    "e",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    " ",
    "Y",
    "o",
    "U",
    " ",
    "n",
    "E",
    "E",
    "d",
  ];

  //   useEffect(() => {
  //     // titolo1.current.style.left = Math.floor(Math.random() * 75) + "%";
  //     // titolo1.current.style.marginLeft = "50%";
  //     // titolo1.current.style.marginTop = "50%";
  //     setAnimationN(1);
  //     // const myTimeout = setTimeout(setAnimationN(2), 3000);
  //     // const myTimeout = setTimeout(setCounter(1), 3000);
  //     // setTimeout(changeCounter, 3000);
  //     let timerId = setInterval(changeCounter, 3000);
  //   }, []);

  //   const changeCounter = () => {
  //     // setCounter(counter + 1);
  //     setAnimationN(2);
  //   };

  //   function animate({ duration, draw, timing }) {
  //     let start = performance.now();

  //     requestAnimationFrame(function animate(time) {
  //       let timeFraction = (time - start) / duration;
  //       if (timeFraction > 1) timeFraction = 1;

  //       let progress = timing(timeFraction);

  //       console.log(counter);

  //       draw(progress);
  //   while (bool) {
  //     draw(progress);
  //   }

  //   if (counter === 0) {
  //     draw(progress);
  //     setCounter(counter + 1);
  //   }
  //   } else if (counter === 1) {
  //     draw1();
  //   }

  //       if (timeFraction < 1) {
  //         requestAnimationFrame(animate);
  //       }
  //     });
  //   }

  //   useEffect(() => {
  //     // titolo1.current.style.left = Math.floor(Math.random() * 75) + "%";
  //     // titolo1.current.style.marginLeft = "50%";
  //     // titolo1.current.style.marginTop = "50%";
  //     setAnimationN(2);
  //     setCounter(2);
  //   }, [counter]);

  //   useEffect(() => {
  //     setTop(Math.floor(Math.random() * 75));
  //     setRight(Math.floor(Math.random() * 75));
  //     setBottom(Math.floor(Math.random() * 75));
  //     setLeft(Math.floor(Math.random() * 75));
  //     setRandomN(Math.floor(Math.random() * 4));
  //     console.log(left);
  //   }, [counter]);

  useEffect(() => {
    // titolo1.current.style.margin-top = "0";
  }, [letter]);

  const changePosition = () => {
    setLeft();
    // titolo1.current.style.left = Math.floor(Math.random() * 75) + "%";
    // titolo1.current.style.top = Math.floor(Math.random() * 75) + "%";
    // titolo1.current.style.backgroundColor = "blue";
    // if (randomN === 0) {
    //   titolo1.current.style.left = left + "%";
    //   titolo1.current.style.top = top + "%";
    //   //   titolo1.current.style.bottom = "0%";
    //   //   titolo1.current.style.top = "0%";
    // } else if (randomN === 1) {
    //   titolo1.current.style.left = left + "%";
    //   titolo1.current.style.bottom = bottom + "%";
    //   titolo1.current.style.right = "0%";
    //   titolo1.current.style.top = "0%";
    // } else if (randomN === 2) {
    //   titolo1.current.style.right = right + "%";
    //   titolo1.current.style.top = top + "%";
    //   titolo1.current.style.bottom = "0%";
    //   titolo1.current.style.left = "0%";
    // } else if (randomN === 3) {
    //   titolo1.current.style.right = right + "%";
    //   titolo1.current.style.bottom = bottom + "%";
    //   titolo1.current.style.top = "0%";
    //   titolo1.current.style.left = "0%";
    // }
  };

  //   const changeValue = () => {
  //     setTop(Math.floor(Math.random() * 75));
  //     setRight(Math.floor(Math.random() * 75));
  //     setBottom(Math.floor(Math.random() * 75));
  //     setLeft(Math.floor(Math.random() * 75));
  //     setRandomN(Math.floor(Math.random() * 4));
  //   };

  //   setInterval(() => setCounter(counter + 1), 5000);
  //   setInterval(changeValue, 3000);

  return (
    <div className="h-full relative w-[90%]">
      <h1
        // onClick={() => {
        //   animate({
        //     duration: 3000,
        //     timing: function (timeFraction) {
        //       return timeFraction;
        //     },
        //     draw: function (progress) {
        //       if (nomr === 0) {
        //         // titolo1.current.style.marginLeft = progress * 20 + "%";
        //         titolo1.current.style.marginTop = progress * 50 + "%";
        //         if (titolo1.current.style.marginTop > "49%") {
        //           animate({
        //             duration: 1000,
        //             timing: function (timeFraction) {
        //               return timeFraction;
        //             },
        //             draw: function (progress) {
        //               titolo1.current.style.marginLeft = progress * 100 + "%";
        //             },
        //           });
        //         }
        //       }
        //     },
        //   });
        // }}
        ref={titolo1}
        className={`text-6xl 
        ${animationN === 1 && "titolo-start"}
        ${animationN === 2 && "titolo-start-1"}
         flex flex-col`}
        style={
          {
            //   left: left,
            //   marginLeft: `${left}`,
            //   backgroundColor: "white",
          }
        }
      >
        HI,
        <br /> <span className="text-sm">i am</span> Roberto
      </h1>

      <div className="cursor-default text-slate-100 flex h-2">
        {arr.map((lettera, i) => (
          <span
            ref={letterRef}
            key={i}
            className={`${
              letter === i ? "letterAnimation" : "top-0 transition-all"
            } cursor-default text-lg lg:text-base md:text-sm font-semibold inline-block transition-all left-[${
              i * 10
            }px]`}
            onMouseOver={() => {
              if (letter === i) {
                setLetter("");
                return;
              }
              setLetter(i);
              setIndice(!indice);
            }}
            style={{
              left: `${i * 10} + "px"`,
            }}
          >
            {lettera}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Start;
// import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
// import { useReducedMotion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// const Start = () => {
//   const [top, setTop] = useState(null);
//   const [right, setRight] = useState(null);
//   const [bottom, setBottom] = useState(null);
//   const [left, setLeft] = useState(null);
//   const [randomN, setRandomN] = useState(null);
//   const titolo1 = useRef();
//   const [letter, setLetter] = useState(["ciao"]);
//   const letterRef = useRef();
//   const [indice, setIndice] = useState(false);
//   const arrOfLetter = [];

//   const arr = [
//     "T",
//     "h",
//     "e",
//     " ",
//     "W",
//     "e",
//     "b",
//     " ",
//     "D",
//     "e",
//     "v",
//     "e",
//     "l",
//     "o",
//     "p",
//     "e",
//     "r",
//     " ",
//     "Y",
//     "o",
//     "U",
//     " ",
//     "n",
//     "E",
//     "E",
//     "d",
//   ];

//   useEffect(() => {
//     setTop(Math.floor(Math.random() * 75));
//     setRight(Math.floor(Math.random() * 75));
//     setBottom(Math.floor(Math.random() * 75));
//     setLeft(Math.floor(Math.random() * 75));
//     setRandomN(Math.floor(Math.random() * 4));
//   }, []);

//   useEffect(() => {
//     // titolo1.current.style.margin-top = "0";
//   }, [letter]);

//   const changePosition = () => {
//     titolo1.current.style.left = Math.floor(Math.random() * 75) + "%";
//     titolo1.current.style.top = Math.floor(Math.random() * 75) + "%";
//     // titolo1.current.style.backgroundColor = "blue";
//     // if (randomN === 0) {
//     //   titolo1.current.style.left = left + "%";
//     //   titolo1.current.style.top = top + "%";
//     //   //   titolo1.current.style.bottom = "0%";
//     //   //   titolo1.current.style.top = "0%";
//     // } else if (randomN === 1) {
//     //   titolo1.current.style.left = left + "%";
//     //   titolo1.current.style.bottom = bottom + "%";
//     //   titolo1.current.style.right = "0%";
//     //   titolo1.current.style.top = "0%";
//     // } else if (randomN === 2) {
//     //   titolo1.current.style.right = right + "%";
//     //   titolo1.current.style.top = top + "%";
//     //   titolo1.current.style.bottom = "0%";
//     //   titolo1.current.style.left = "0%";
//     // } else if (randomN === 3) {
//     //   titolo1.current.style.right = right + "%";
//     //   titolo1.current.style.bottom = bottom + "%";
//     //   titolo1.current.style.top = "0%";
//     //   titolo1.current.style.left = "0%";
//     // }
//   };

//   //   const changeValue = () => {
//   //     setTop(Math.floor(Math.random() * 75));
//   //     setRight(Math.floor(Math.random() * 75));
//   //     setBottom(Math.floor(Math.random() * 75));
//   //     setLeft(Math.floor(Math.random() * 75));
//   //     setRandomN(Math.floor(Math.random() * 4));
//   //   };

//   //   setInterval(changePosition, 5000);
//   //   setInterval(changeValue, 3000);

//   return (
//     <>
//       <h1
//         ref={titolo1}
//         className={`text-6xl absolute transition-all `}
//         // style={{
//         //   //   left: 0,
//         //   marginLeft: `${left}`,
//         //   backgroundColor: "white",
//         // }}
//       >
//         HI,
//         <br /> <span className="text-sm">i am</span> Roberto
//       </h1>

//       <div className="text-slate-100 flex h-2">
//         {arr.map((lettera, i) => (
//           <span
//             ref={letterRef}
//             key={i}
//             className={`${
//               letter === i ? "letterAnimation" : "top-0 transition-all"
//             } text-lg lg:text-base md:text-sm font-semibold inline-block transition-all left-[${
//               i * 10
//             }px]`}
//             onMouseOver={() => {
//               setLetter(i);
//               setIndice(!indice);
//             }}
//             style={{
//               left: `${i * 10} + "px"`,
//             }}
//           >
//             {lettera}
//           </span>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Start;
