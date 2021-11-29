import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
    return (
        <div className="profil-Container">
            <div className="profil-parent">
                <div className="profil-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href="https://www.linkedin.com/in/hassen-jalleli-6788ab214/">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/hassenjallel">
                                <i className="fa fa-github-square" ></i>
                            </a>
                        </div>
                    </div>
                    <div className="profil-details-name">
                        <span className="primary-text">
                            {""}
                            Hello , I'M <span className="highlighted-text"> Hassen Jalleli</span>
                        </span>
                    </div>

                    <div className="profil-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "ReactJs Dev",
                                        1000,
                                        "NodeJS Dev",
                                        1000,
                                        "MERN Stack Dev",
                                        1000,
                                        "Full Stack Dev",
                                        1000,
                                    ]} />
                            </h1>
                            <span className='profil-role-tagline'>
                                knack of building a web application with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profil-options">
                    <a  href="mailto:hassen.jalleli@esprit.tn">
                        <button className="btn primary-btn">
                           
                            Hire Me

                              
                        </button>
                        </a>
                    </div>


                </div>
                <div className="profil-picture">
                    <div className="profil-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}