import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
   const history = useNavigate();
   function Homenav(){
      history("/");
   }
   function Teamnav(){
      history("/team");
   }
   function Navnav(){
      history("/events");
   }
   function Videonav(){
      history("/videos")
   }
    return(<div>
        <nav className="navbar navbar-expand-lg">
             <a className="navbar-brand brand" style={{color:"grey"}}><img className="logo" src="gdsclogo.png" alt="GDSC-logo"></img></a>
             {/* <a className="navbar-brand brand1" style={{color:"grey"}}>Prathyusha Engineering College</a> */}
             <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" style={{borderColor: "rgba(1,2,3)"}}></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
               <ul className="navbar-nav ms-sm-auto whole-nav">
                  <li className="nav-item nav1">
                     <a  className="nav-link" onClick={Homenav} style={{color:"grey"}}>HOME</a>
                  </li>
                  <li className="nav-item nav1">
                     <a  className="nav-link" onClick={Teamnav} style={{color:"grey"}}>TEAM</a>
                  </li>
                  <li className="nav-item nav1">
                     <a  className="nav-link" onClick={Navnav} style={{color:"grey"}}>EVENTS</a>
                  </li>
                  <li className="nav-item nav1">
                     <a  className="nav-link" onClick={Videonav} style={{color:"grey"}}>VIDEOS/IMAGES</a>
                  </li>
                  <li className="nav-item nav1">
                     <a  className="nav-link" href="#contact" style={{color:"grey"}}>CONTACT</a>
                  </li>
                </ul>
             </div>
          </nav>

    </div>)
}

export default Navbar;