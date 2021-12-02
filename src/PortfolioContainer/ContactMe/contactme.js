import React from 'react'
import './contactme.css'
export default function Contact() {
    return (
        <div id="contactme" className="contact-container" >
            <div className="part1">
                <div className="parag1">
                    <h2>WANNA CHAT?</h2>
                </div>
                <div className="parag2">
                    <h4>i'am looking for an end-of-study  internship for a period 
                        of 6 months to test my knowldge and skills on a practical level, 
                        you’re more than welcome to say a big hello via email at
                         <a href="mailto:hassen.jalleli@esprit.tn"> <span style={{ color: "#fd4b03" }}> 
                          hassen.jalleli@esprit.tn  </span> </a>or feel free to drop
                           me a line on <a href="https://www.linkedin.com/in/hassen-jalleli-6788ab214/">
                               <span style={{ color: "#fd4b03" }}>Linkedin</span></a></h4>
                </div>
            </div>
            <div className="part2">
                <div className="parag3">
                    <h6>©HassenJalleli</h6>
                </div>
                <div className="parag4">
                    <div className="linkedin">
                    <a href="https://www.linkedin.com/in/hassen-jalleli-6788ab214/">
                      <h3>  <i class="fa fa-linkedin" style={{color:"#fd4b03",width:"50px"}}></i></h3>
                    </a>
                    </div>
                    <div className="git">
                    <a href="https://github.com/hassenjallel">
                     <h3>   <i className="fa fa-github-square" style={{color:"#fd4b03",width:"50px"}} ></i></h3>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}