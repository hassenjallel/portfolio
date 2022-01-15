import React from 'react'
import './contactme.css'
import coffeCup from'../../assets/Home/14.png'
import coffe from'../../assets/Home/15.png'
import brush from'../../assets/Home/13.png'

export default function Contact() {
    return (
        <>
        <div id="contactme" className="contact-container" >
            <div className="coffe-cup">
           <img src={coffeCup} className="coffe-cup-img" alt="coffee cup"/>
           </div>
           <div className="empty">
            <h1 className="title-contact">Contact</h1>
            <h1 className="title2-contact">YOU WANT A VIRTUAL COFFEE</h1>

           </div>
           <div className="coffe">
           <img src={coffe} className="coffeimage" alt="coffee cup"/>
           </div>
           
           <div className="brush">
           <img src={brush} className="brushimage" alt="coffee cup"/>

           </div>
        </div>
            <div className="contact-me-parag">
                <h3 className="parag">If you like what you see, (and how could you not?) why not shoot me an email? I would love to talk more about your team dynamic and the products you create. Best case scenario, we become best friends. Worst case scenario I make you laugh and we drift apart.</h3>
                <a href="mailto:hassen.jalleli@esprit.tn">
                    <button className="btn primary-btn" style={{backgroundColor:"#fe5756"}}> hire me</button>
                </a>
            </div>
        </>
    )
}