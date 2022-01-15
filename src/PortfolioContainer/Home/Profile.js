import React from "react";
import Hassen from "../../assets/Home/1.png";
import HassenBack from "../../assets/Home/2.png";
import "./Profile.css";
export default function Profile() {
  return (
    <div id="home" className="profil-Container">
     <div className="profil-L">
     <h2 className="welcome">WELCOME</h2> 
     <h2 className="marahbe" >مرحبا </h2>   
     <h1 className="imhassen">I AM HASSEN JALLELI</h1>

     <span className="profil-desc">
          Oh my goodness , hello ! I am Front &amp; Back-End developer based in
          Tunis , Tunisia . I love long walks on the beach , writing clean code
          , and pushing my skills to the limit . My interests include joining
          and exciting team of passionate people , personal growth , and making
          silly faces.
          <br /> <br />
          Other than coding , I spend most of my free time playing League of
          Legends (add me !) or any other video games . I ve also been trying to
          read more so feel free to reach out to me with any book
          recommendations!
        </span>
      </div>
     <div className="profil-R">
        <img className="hassen-background" src={HassenBack}/>
        <img className="hassen-pic" src={Hassen}/>

        <div className="icons">
        <div className="facebook">
            <a href="https://www.facebook.com/hassen.jalleli.5/">
              <h3>
                {" "}
                <i
                  className="fa fa-facebook-square"
                  style={{ color: "#fd4b03", width: "50px"  }}
                ></i>
              </h3>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/hassen-jalleli-6788ab214/">
              <h3>
                {" "}
                <i class="fa fa-linkedin-square" aria-hidden="true" 
                style={{ color: "#fd4b03", width: "50px" , size:"4cm" }}
                ></i>
               
              </h3>
            </a>
          </div>
          <div className="git">
            <a href="https://github.com/hassenjallel">
              <h3>
                {" "}
                <i
                  className="fa fa-github-square"
                  style={{ color: "#fd4b03", width: "50px" }}
                ></i>
              </h3>
            </a>
          </div>
        </div>
       
     </div>
    </div>
  );
}
