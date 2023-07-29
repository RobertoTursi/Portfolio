import { useEffect, useState } from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
}) => {
  const [showArrow, setShowArrow] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(!transition);
    setTransition(!transition);

    console.log(transition);
  }, []);

  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   {/* rispettivamente     "direzione", "tipo", "delay", "durata" */}

    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`${
          transition ? "project-transition" : "opacity-0"
        } bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full -ml-16`}
      >
        <div
          onMouseOver={() => {
            setShowArrow(true);
          }}
          onMouseLeave={() => {
            setShowArrow(false);
          }}
          className="relative w-full h-[230px]"
        >
          <img
            src={images[carouselIndex]}
            alt={images[carouselIndex]}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                // src="../assets/github.png"
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {showArrow && (
            <ArrowRightIcon
              className="absolute bottom-[5%] right-[45%] icon-style-2"
              //   className="absolute right-4 top-[50%] icon-style-2"
              onClick={() => {
                if (carouselIndex < images.length - 1) {
                  setCarouselIndex(carouselIndex + 1);
                } else {
                  setCarouselIndex(0);
                }
              }}
            />
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </>
    // {/* </motion.div> */}
  );
};

const Project = () => {
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
        } text-3xl left-0 absolute text-[5rem] top-0 text-slate-100`}
      >
        Project
      </h1>
      {/* <h1
        className={`${
          !transition ? "title-transition" : ""
        } opacity-0 text-3xl -ml-10 text-[5rem] absolute top-0 ${color}`}
      >
        Project
      </h1> */}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project.-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Project;
