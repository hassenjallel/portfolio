import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Header'
import Profile from '../Profile'
import './Home.css'
export default function Home() {
    
    return(
       <div className="home-container">
           <Navbar/>
           <Profile/>
           <Footer/>
           
       </div>
    )
}