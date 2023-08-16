import React from "react";
import { Slide } from "react-reveal";
function Team()
{
    return(<div>
       
        <div className="contianer-fluid divteam"> 
        <Slide left>
        <h1 id="teamh1">The Team</h1>
        </Slide>
        <Slide right>
        <h4 id="teamh4">Presenting board 2023-2024</h4>
        </Slide>
        </div>
        <img id="imgteam" src="https://dscvit.com/images/team.svg"/>
     <i id="downarrow1"className="fa-solid fa-arrow-down fa-beat fa-3x"></i>
       
      
    </div>)
}
export default Team;