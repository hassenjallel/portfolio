import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/NavBar'
import Profile from '../Profile'
import { BrowserRouter as Router } from 'react-router-dom';

import './Home.css'
export default function Home() {

    return (
        <div className="home-container">
                <Navbar />
            <Profile />
            <Footer />

        </div>
    )
}