import { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Section from "./About";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Start from "./Start";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showLi, setShowLi] = useState(false);
  const [color, setColor] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [hoverLi, setHoverLi] = useState(false);

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={(e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
      }}
    >
      <div
        style={{
          transform: `translate(calc( ${cursorX}px - 50%), calc( ${cursorY}px - 50%))`,
        }}
        className="cursor"
      />
      <div
        style={{
          transform: `translate(calc( ${cursorX}px - 50%), calc( ${cursorY}px - 50%))`,
        }}
        className={`${
          mouseDown
            ? "outline-transition"
            : "w-[64px] h-[64px] outline-reverse-transition"
        } outline relative`}
      >
        <div className="absolute top-0 h-2 w-[2px] right-[50%] bg-white" />
        <div className="absolute left-0 h-[2px] w-2 top-[50%] bg-white" />
        <div className="absolute bottom-0 h-2 w-[2px] right-[50%] bg-white" />
        <div className="absolute right-0 h-[2px] w-2 top-[50%] bg-white" />
      </div>

      <div
        className={`${color === "text-green-500" && "sfondo-about"}
      ${color === "text-slate-100" && "sfondo-project"}
      ${color === "" && "sfondo-start"}
      ${color === "text-red-500" && "sfondo-contact"} box`}
      >
        <div
          className={`${
            activeLink === "Contact" ? "flex-col" : "flex-row"
          } relative h-[85vh] flex pl-32`}
        >
          {activeLink === "" && <Start />}
          {activeLink === "About" && <About />}
          {activeLink === "Project" && <Project />}
          {activeLink === "Contact" && <Contact />}
          {/* (
            <h1 className="text-3xl">
              HI,
              <br /> <span className="text-sm">i am</span> Roberto
            </h1>
          )} */}{" "}
          {/* /* rispettivamente     "direzione", "tipo", "delay", "durata" */}
          {/* <Section title={activeLink} color={color} /> */}
          {/* // <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            //   <Section title={activeLink} />
            // </motion.div>
  
            // <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            //   <h1 className="text-3xl">{activeLink}</h1>
            // </motion.div> */}
          {/* )} */}
          {/* {activeLink === "" ? (
            <h1 className="text-3xl">
              HI,
              <br /> <span className="text-sm">i am</span> Roberto
            </h1>
          ) : ( */}
          {/* /* rispettivamente     "direzione", "tipo", "delay", "durata" */}
          {/* <Section title={activeLink} color={color} /> */}
          {/* // <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            //   <Section title={activeLink} />
            // </motion.div>
  
            // <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            //   <h1 className="text-3xl">{activeLink}</h1>
            // </motion.div> */}
          {/* )} */}
        </div>

        {/* <button className="bg-white" onClick={() => setShowMenu(!showMenu)}>
          cliccami
        </button> */}

        <div
          // onMouseOver={() => setShowMenu(true)}
          className={`${
            showMenu ? "menu" : "w-0 opacity-0 absolute right-[10%]"
          } `}
        >
          <div
            onMouseOver={() => setShowLi(true)}
            className="flex flex-col h-[85vh] justify-center px-5 relative"
            // className="nav-div flex flex-col h-[85vh] justify-center px-5 hover:border-l-2 ease-in-out duration-300 relative"
          >
            <div
              className={`${
                showMenu && "div-vuoto"
              } bg-slate-950 absolute top-[-7px] w-6 h-1 rounded-full left-[-11px]`}
            />
            <div
              className={`${
                showMenu && "div-vuoto"
              } bg-slate-950 absolute bottom-[-7px] w-6 h-1 rounded-full left-[-11px]`}
            />
            <div
              className={`${
                showMenu && "div-linea-vuota"
              } bg-white h-0 absolute bottom-0 w-[2px] rounded-full left-[0.1px]`}
            />
            <div
              className={`${
                showMenu && "div-linea-vuota"
              } bg-white h-0 absolute top-0 w-[2px] rounded-full left-[0.1px]`}
            />
            {showLi && (
              <ul>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${activeLink === link.title ? "movedLi" : ""} ${
                      hoverLi === link.title
                        ? "tracking-[7px] transition-all duration-1000"
                        : "tracking-normal transition-all duration-1000"
                    } text-slate-100 hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActiveLink(link.title);
                      setColor(link.color);
                    }}
                    onMouseOver={() => setHoverLi(link.title)}
                    onMouseLeave={() => setHoverLi(false)}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {!showMenu && (
          <Bars3Icon
            onMouseOver={() => setShowMenu(true)}
            // onMouseOver={() => setShowMenu(true)}
            className="text-slate-200 icon-style-4 absolute right-2"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
