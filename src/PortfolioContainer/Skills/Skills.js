import React, { useEffect } from 'react';
import html from '../../assets/Home/html.png';
import css from '../../assets/Home/css.png';
import react from '../../assets/Home/reactjs.png';
import nodejs from '../../assets/Home/nodejs.png';
import js from '../../assets/Home/js.png';
import angular from '../../assets/Home/angular.png';
import c from '../../assets/Home/c.png';
import cplus from '../../assets/Home/c++.png';
import java from '../../assets/Home/java.png';
import php from '../../assets/Home/php.png';
import database from '../../assets/Home/database.png'
import AOS from 'aos';
import "aos/dist/aos.css";
import './Skills.css';
import Footer from '../Home/Footer/Footer';


export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (

        <div id="skills"className="skills-container">
            <div className="footer-skills-container">
                <div className="footer-skills-parent">
                    <img
                        src={require("../../assets/Home/shape-bg-2.png").default}
                        alt="you have problem with the image"
                    />
                </div>
            </div>
            <div className="box-skills">
                <div className="title">
                    <h1>My Skills</h1>
                </div>
                <div className="language-skills" >
                    <div className="dev-lang " data-aos="zoom-out-up">
                        <img
                            src={html}
                            alt="you have problem with the image"
                        />
                        <h3 >Html</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={css}
                            alt="you have problem with the image"
                        />
                        <h3 >CSS</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={react}
                            alt="you have problem with the image"
                        />
                        <h3>reactjs</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={nodejs}
                            alt="you have problem with the image"
                        />
                        <h3 >NodeJS</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={js}
                            alt="you have problem with the image"
                        />
                        <h3 >JavaScript</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={angular}
                            alt="you have problem with the image"
                        />
                        <h3 >Angular</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={c}
                            alt="you have problem with the image"
                        />
                        <h3 >C</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={cplus}
                            alt="you have problem with the image"
                        />
                        <h3 >C++</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={java}
                            alt="you have problem with the image"
                        />
                        <h3 >Java</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={php}
                            alt="you have problem with the image"
                        />
                        <h3 >PHP</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={database}
                            alt="you have problem with the image"
                        />
                        <h3 >MongoDB</h3>
                    </div>
                    <div className="dev-lang" data-aos="zoom-out-up">
                        <img
                            src={database}
                            alt="you have problem with the image"
                        />
                        <h3 >MySQL</h3>
                    </div>
                </div>
            </div>
            <div className="footer-skills-container">
                <div className="footer-skills-parent">
                    <img
                        src={require("../../assets/Home/shape-bg.png").default}
                        alt="you have problem with the image"
                    />
                </div>
            </div>
            
            
        </div>

    )
}