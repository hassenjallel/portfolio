import React, { useEffect } from "react";
import Flame from "../../assets/Home/10.png";
import mosque from "../../assets/Home/8.png";
import Tooly from "../../assets/Home/9.png";
import Galaxy from "../../assets/Home/11.png";
import Refugee from "../../assets/Home/12.png";
import projetc from "../../assets/Home/PROJECTS.jpg"
import projetc2 from "../../assets/Home/PROJECTS-phone.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import "./Project2.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="projects2" className="projects2-container">
        
        <img src ={projetc} className="title-pic"  style={{ width:"100%"}}/>
        <img src ={projetc} className="title-pic-phone" />

        {/* <div className="rest-title">
          <h2>CURIOUS TO KNOW</h2>
          <h2 style={{ paddingLeft: "110px" }}>OTHER PROJECT I'VE DONE ?</h2>
        </div>
        <div className="project-word">
          <img className="flameimage" src={Flame} alt="flame-image" />
          <div className="project-title">
            <h1>PROJECTS</h1>
          </div>
          <h2
            className="what-txt"
            style={{
              color: "white",
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            WHAT
          </h2>
        </div>
        */ }
      </div>
      <div className="display-project">
        <div className="mosque-project">
          <div className="mosque-image">
            <img className="mosq-lapt" alt="mosque image" src={mosque} />
          </div>
          <div className="mosque-desc">
            <h2 className="titre-de-projet">Mosque Managment</h2>
            <span className="desc">
              a website and mobile application for mosque management Developed
              for a real client from france ,it allow islamic people to easily
              practice their religion. using ReactJs for Frontend using NodeJS ,
              ExpressJs for Backend using MongoDB for database
            </span>
          </div>
        </div>
        <div className="mosque-project2">
        <div className="mosque-image2">
            <img className="mosq" alt="tooly image" src={Tooly} />
          </div>
          <div className="mosque-desc2">
            <h2 className="titre-de-projet">Tooly </h2>
            <span className="desc">
              a website application for the rental of equipment , It represents
              a fair of several companies each offering different machines and
              tools available to users wishing to rent equipment using ReactJs
              for Frontend using NodeJS , ExpressJs for Backend using MongoDB
              for database
            </span>
          </div>
          
        </div>
        <div className="mosque-project">
          <div className="mosque-image">
            <img className="mosq-lapt" alt="galaxy image" src={Galaxy} />
          </div>
          <div className="mosque-desc">
            <h2 className="titre-de-projet">Galaxy </h2>
            <span className="desc">
              an e-commerce website application for a real client , is a web
              platform for online sales of ceramic product using HTML ,CSS ,
              JAVASCRIPT ,BOOTSTRAP for Frontend using PHP NATIVE for Backend
              using MYSQL for database
            </span>
          </div>
        </div>
        <div className="mosque-project2">
        <div className="mosque-image2">
            <img className="mosq" alt="refugee image" src={Refugee} />
          </div>
          <div className="mosque-desc2">
            <h2 className="titre-de-projet">Refugee </h2>
            <span className="desc">
              It is a project of design, development, and integration of an
              application spread over 3 platforms, sharing the same database
              Desktop using JavaFX, SQL. Web using HTML5, CSS, PHP, SQL, PL /
              SQL, and JavaScript under the Symfony 3.4 framework. for mobile
              using codenameone
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
