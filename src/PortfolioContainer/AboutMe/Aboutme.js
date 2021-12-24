import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Aboutme.css";
export default function Aboutme() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="aboute" className="Aboutme-container">
      <div className="box">
        <div className="box-content">
          <div className="Pic" data-aos="zoom-in">
            <div className="profil-pic">
              <div className="profil-pic-background"></div>
            </div>
          </div>
          <div className="Text">
            <div className="title" data-aos="zoom-in">
              <h2 style={{ fontFamily: "Poppins SemiBold" }}>About Me</h2>
            </div>
            <div className="parag">
              <h5
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                I 'm a front and back end developer and I genuinely love what i
                do, I'm always trying to learn new things and discover new
                technologies And hey ! I forgot to mention that I'm an
                engineering student who is looking for an end-of-study
                internship for a period of 6 months to test my knowldge and
                skills on a practical level.! I can work with different
                technologies like ReactJs ,NodeJS, and others related to
                frontend and Backend development.
              </h5>
              <a
                href="Hassen-Jalleli-EN-cv-finale.pdf"
                download=" Hassen-Jalleli-EN-cv-finale.pdf"
              >
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
