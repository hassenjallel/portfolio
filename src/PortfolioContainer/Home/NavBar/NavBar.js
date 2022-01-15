import React, { useEffect } from 'react'
import './NavBar.css';
//import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link'
import $ from 'jquery';

const NavBar = () => {

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);

    return (
        <nav className="navbarmain navbar navbar-expand-lg navbar-mainbg ">

            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fa fa-bars" aria-hidden="true" style={{ color: "black" }}></i>
            </button>
            <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">

                    </div>
                    <li className="nav-item active">
                        <NavLink smooth className="nav-link" to="#home" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink smooth className="nav-link" to="#aboute" data-toggle="collapse"
                            data-target="#navbarSupportedContent" exact>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink smooth className="nav-link" to="#skills" data-toggle="collapse"
                            data-target="#navbarSupportedContent" exact>
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink smooth className="nav-link" to="#projects" data-toggle="collapse"
                            data-target="#navbarSupportedContent" exact>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink smooth className="nav-link" to="#contactme" data-toggle="collapse"
                            data-target="#navbarSupportedContent" exact>
                            Contact me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;