import React from "react"
import myWebsiteLogo from "../images/myWebsiteLogo.png"

function NavBar(){


return(
<div className="nav-bar"> 
    <div className="nav-bar-logo">
        <img src={myWebsiteLogo} alt="myWebsiteLogo"/>
    </div>
    <div className="nav-bar-navigation-buttons">
        <button className="nav-bar-navigation-single-button">01.About</button>    
        <button className="nav-bar-navigation-single-button">02.Skills</button>
        <button className="nav-bar-navigation-single-button">03.Projects</button>
        <div className="nav-bar-side-bar-bars">
            <div clssName="bar1"></div>
            <div clssName="bar2"></div>
            <div clssName="bar3"></div>
        </div>
    </div>
    <div className="nav-bar-resume">
        <button>My resume</button>
    </div>

    <div className="nav-bar-side-bar">
            <button className="nav-bar-side-bar-single-button"> X </button>
            <button className="nav-bar-side-bar-single-button">01.About</button>
            <button className="nav-bar-side-bar-single-button">02.Skills</button>
            <button className="nav-bar-side-bar-single-button">03.Projects</button>            
    </div>
</div>
);
} 
export default NavBar;