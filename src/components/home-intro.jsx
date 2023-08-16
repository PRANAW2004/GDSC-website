import React from "react";
import { Slide } from "react-reveal";
import Detail from "./detail";
import { useNavigate } from "react-router-dom";
function Home(){
    return(<div className="home">
        <div className="container-fluid about">
            <div className="inside-home">
        <Slide right>
        <h1>About GDSC Prathyusha</h1>
        </Slide>
        <Slide left>
        <p>At GDSC Prathyusha, We strive to create a peer to peer learning environment to create a solution to a real world problem. Brilliant minds from different backgrounds come under one roof to motivate others to increase their skills.</p>
        </Slide>
        </div>
        <img className="landing-image" src="landing.svg" alt="Landing-image"></img>
        <a id="anchor-arrow" href="#det-content"><i id="downarrow" className="fa-solid fa-arrow-down  fa-3x"></i></a>
        </div>
    </div>)
}

export default Home;