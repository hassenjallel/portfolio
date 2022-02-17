import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import Html from "../../assets/Home/html.png";
import JavaScript from "../../assets/Home/javascript.png";
import java from "../../assets/Home/java.png";
import css from "../../assets/Home/css.png";
import cplus from "../../assets/Home/c++.png";
import c from "../../assets/Home/c.png";
import angular from "../../assets/Home/angular.png";
import reactjs from "../../assets/Home/reactjs.png";
import nodejs from "../../assets/Home/nodejs.png";
import php from "../../assets/Home/php.png";
import brush from "../../assets/Home/4.png";
import skil from "../../assets/Home/5.png";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
     x: "0%",
      transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: "60" },
    },
    
  };
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    id="home"
     id="skills" className="skills-container">
      <div className="title">
        <img
          className="brushImage"
          src={brush}
          alt="you have problem with the image"
        />
        <h2 className="toolkit">My Toolkit</h2>
      </div>
      <div className="skills-image">
        <div className="skill">
        <img
          className="image-skill"
          src={Html}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={css}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={JavaScript}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={reactjs}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={php}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={nodejs}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={c}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={java}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={angular}
          alt="you have problem with the image"
        />
        </div>
        <div className="skill">
        <img
          className="image-skill"
          src={cplus}
          alt="you have problem with the image"
        />
        </div>
        
      </div>
    </motion.div>
  );
}
