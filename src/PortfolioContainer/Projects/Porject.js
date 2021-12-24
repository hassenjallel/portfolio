import React, { useState, useEffect } from "react";
import mosque from "../../assets/Home/mosque.png";
import tooly from "../../assets/Home/tooly.png";
import galaxy from "../../assets/Home/galaxy.png";
import charity from "../../assets/Home/charity.png";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

export default function Projects(props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>

          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Mosque Managment", logoSrc: "mosque.svg" },
    { label: "Tooly", logoSrc: "tools.png" },
    { label: "Galaxy", logoSrc: "ceramic.png" },
    { label: "refugee", logoSrc: "refugee.png" },
  ];

  //here we have

  const resumeDetails = [
    /* mosque**/
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <img
          className="image"
          src={mosque}
          style={{ width: "400px", height: "180px" }}
          alt="you have problem with the image"
        />
        <ResumeHeading
          heading={"Mosquee"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            a website and mobile application for mosque management Developed for
            a real client from france ,it allow islamic people to easily
            practice their religion. using ReactJs for Frontend , NodeJS
            ExpressJs for Backend and MongoDB for database
          </span>
        </div>
        <div className="experience-description"></div>
      </div>
    </div>,

    /* tooly */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <img
          className="image"
          src={tooly}
          style={{ width: "400px", height: "180px" }}
          alt="you have problem with the image"
        />
        <ResumeHeading
          heading={"TOOLY"}
          subHeading={"FULL STACK MERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            a website application for the rental of equipment , It represents a
            fair of several companies each offering different machines and tools
            available to users wishing to rent equipment using ReactJs for
            Frontend , NodeJS & ExpressJs for Backend and MongoDB for database
          </span>
        </div>
        <div className="experience-description"></div>
      </div>
    </div>,

    /* galaxy */

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <img
          className="image"
          src={galaxy}
          style={{ width: "400px", height: "180px" }}
          alt="you have problem with the image"
        />
        <ResumeHeading
          heading={"Galaxy"}
          subHeading={"FULL STACK DEVELOPER "}
          fromDate={"2018"}
          toDate={"2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            an e-commerce website application for a real client , is a web
            platform for online sales of ceramic product using HTML ,CSS ,
            JAVASCRIPT ,BOOTSTRAP for Frontend and PHP NATIVE for Backend and
            MYSQL for database
          </span>
        </div>
        <div className="experience-description"></div>
      </div>
    </div>,
    /* charity */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <img
          className="image"
          src={charity}
          style={{ width: "400px", height: "180px" }}
          alt="you have problem with the image"
        />
        <ResumeHeading
          heading={"refugee"}
          subHeading={"INTEGATE PROJECT"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            It is a project of design, development, and integration of an
            application spread over 3 platforms, sharing the same database
            Desktop using JavaFX, SQL. Web using HTML5, CSS, PHP, SQL, PL / SQL,
            and JavaScript under the Symfony 3.4 framework. for mobile using
            codenameone
          </span>
          
        </div>
        <div className="experience-description"></div>
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"PROJECTS"} subHeading={"My Projects Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
