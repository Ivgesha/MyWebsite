import React from "react";
import myWebsiteLogo from "../images/myWebsiteLogo.png";
import instagramLogo from "../images/instagramLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import githubLogo from "../images/githubLogo.png";
import facebookLogo from "../images/facebookLogo.png";



function Footer(){


    return(
        <footer>
            <img src={myWebsiteLogo} alt="Logo"/>
            <br/>
            <p>The way to the top made by small steps</p>
            <br/>
            <a href="https://github.com/Ivgesha">
                <button>
                <img src={githubLogo} alt="Github Logo"/>
                </button>
            </a>
            <a href="www.linkedin.com/in/evgeni-iseev-622850181">
                <button>
                <img src={linkedinLogo} alt="linkedin Logo"/>
                </button>
            </a>
            <a href="https://www.facebook.com/Ivgesha93">
                <button>
                <img src={facebookLogo} alt="facebook Logo"/>
                </button>
            </a>
            <a href="https://www.instagram.com/Evgeni_Iseev/">
                <button>
                <img src={instagramLogo} alt="instagram Logo"/>
                </button>
            </a>

             




        </footer>



    )



}


export default Footer;