import React from "react";
import "./Footer.css";
import Paw from "./Pics/paw.png";
import {AiOutlineGithub} from 'react-icons/ai'

export default function Footer() {
    function gitHubLink(){
        window.open("https://github.com/STEGD/dog-finder-main")
    }
  return (
    <div className="main-footer">
      <div className="container">
        
          <img className = 'paw-logo' src={Paw} alt="paw" />
        <p className = "footer-p">Copyright &copy; 2020 STEDG. All rights reserved. {<AiOutlineGithub className= 'icon-logo' onClick = {gitHubLink}/>}</p>
      
      </div>
    </div>
  );
}
