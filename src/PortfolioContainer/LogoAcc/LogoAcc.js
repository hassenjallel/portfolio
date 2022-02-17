import React from "react";
import "./LogoAcc.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Typical from 'react-typical'

export default function LogoAcc() {
  const history = useHistory();
  function displayprofil() {
    history.push({
      pathname: "/profil",
    });
  }
  const buttonVar = {
    hover: {
      scale: [1.1],
      textShadow: "@px Opx 8px rgb(255,255, 255)",
      boxShadow: "0px Opx 8px rgb(255,255,255)",
      transition: {
        yoyo: 10,
      },
    },
  };
  const pathVarients = {
    hidden: {
      opacity: 1,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
 
  return (
    <motion.div
      className="LogoAcc-container"
    
      exit={{   x: "-100%",
      transition: { delay: 0.3, duration: 0.3 ,ease:"easeInOut" },}}
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.2"
        viewBox="0 0 300 400"
        width="300"
        height="400"
        className="svgimage"
      >
        <title>Nouveau projet</title>
        <motion.path
          variants={pathVarients}
          initial="hidden"
          animate="visible"
          id="Forme 11"
          class="s0"
          d="m174 266h13v84h-13zm-62 0h12v84h-12zm-92 84h82v-95h94v95h53v-221h11v221h8v-276h12v287h-2h-114v-95h-30v94h-114zm153-301h13v86h-13zm480 339m-543-340h16v87h-16zm106 39h11v85h-11zm-146 139h12v86h-12zm-51-187h1h113v95h31v-95h114v10h-1h-81v94h-94v-94h-53v219h-11v-219h-8v275h-11zm69 143v-9h117h1v-95h32v104h-85v36h57v8h-118v95h-32v-103h84v-36z"
        />
      </svg>

      <motion.h2
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: "60" }}
      >
        <Typical className="typical"
          loop={Infinity}
          steps={[
            "My Name is Hassen jalleli",
            1000,
            "curious to know more about me ?",
            1000,
            "About My skills ?",
            1000,
            " my projects ?",
            1000,
            "So you have to click on start button",
            1000,
           
          ]}
        />

      </motion.h2>
      <motion.button
      className="buttonclass"
        whileHover={{
          scale: 1.1,
          textShadow: "@px Opx 8px #032331",
          boxShadow: "0px Opx 8px #032331",
          transition: {
            yoyo: Infinity,
          },
        }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: "60" }}
        onClick={displayprofil}
      >
        Let's start
      </motion.button>
    </motion.div>
  );
}
