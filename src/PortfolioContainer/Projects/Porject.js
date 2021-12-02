import React, { useEffect } from 'react';
import mosque from '../../assets/Home/mosque.png'
import tooly from '../../assets/Home/tooly.png'
import galaxy from '../../assets/Home/galaxy.png'
import charity from '../../assets/Home/charity.png'

import AOS from 'aos';
import "aos/dist/aos.css";
import './Projects.css';


export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (

        <div id="projects" className="projects-container">
            <div className="titre">
                <h3>Projects</h3>

            </div>
            <div className="box-projects">
                <div className="project-container" data-aos="flip-left">
                    <div className="project-image">
                        <img className="image"
                            src={mosque}
                            alt="you have problem with the image"
                        />
                    </div>
                    <div className="project-title">
                        <h4>Mosque Managment</h4>
                    </div>
                    <div className="descrip">
                        <ul>
                            <li>
                                <span>a website and mobile application for mosque management Developed for a real client
                                    from france ,it allow islamic people to easily  practice their religion.

                                </span>
                            </li>
                            <li>
                                <span>using ReactJs for Frontend</span>
                            </li>
                            <li>
                                <span>using NodeJS , ExpressJs for Backend</span>
                            </li>
                            <li>
                                <span>using MongoDB for database</span>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="project-container" data-aos="flip-right">
                    <div className="project-image">
                        <img className="image"
                            src={tooly}
                            alt="you have problem with the image"
                        />
                    </div>
                    <div className="project-title">
                        <h4>Tooly </h4>
                    </div>
                    <div className="descrip">
                        <ul>
                            <li>
                                <span>a website application for the rental of  equipment ,   It represents a fair of several companies each offering different machines and tools available to users wishing to rent equipment

                                </span>
                            </li>
                            <li>
                                <span>using ReactJs for Frontend</span>
                            </li>
                            <li>
                                <span>using NodeJS , ExpressJs for Backend</span>
                            </li>
                            <li>
                                <span>using MongoDB for database</span>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="project-container" data-aos="flip-right">
                    <div className="project-image">
                        <img className="image"
                            src={galaxy}
                            alt="you have problem with the image"
                        />
                    </div>
                    <div className="project-title">
                        <h4>Galaxy </h4>
                    </div>
                    <div className="descrip">
                        <ul>
                            <li>
                                <span>an e-commerce website application for a real client  ,
                                    is a web platform for online sales of ceramic product
                                </span>
                            </li>
                            <li>
                                <span>using HTML ,CSS , JAVASCRIPT ,BOOTSTRAP for Frontend</span>
                            </li>
                            <li>
                                <span>using  PHP NATIVE for Backend</span>
                            </li>
                            <li>
                                <span>using MYSQL for database</span>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="project-container" data-aos="flip-right">
                    <div className="project-image">
                        <img className="image"
                            src={charity}
                            alt="you have problem with the image"
                        />
                    </div>
                    <div className="project-title">
                        <h4>refugee </h4>
                    </div>
                    <div className="descrip">
                        <ul>
                            <li>
                                <span>It is a project of design, development, and integration of an
                                    application spread over 3 platforms, sharing the same
                                    database
                                </span>
                            </li>
                            <li>
                                <span>Desktop using JavaFX, SQL.</span>
                            </li>
                            <li>
                                <span>Web using HTML5,
                                    CSS, PHP, SQL, PL / SQL, and JavaScript under the Symfony
                                    3.4 framework.
                                </span>
                            </li>
                            <li>
                                <span>for mobile using codenameone </span>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    )
}