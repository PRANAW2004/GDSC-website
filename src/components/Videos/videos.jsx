import React from "react";
import { Slide,Fade } from "react-reveal";

function Videos()
{
    return(<div>
        <Fade top>
       <h1 id="videosh1">Videos</h1>
       </Fade>
       <div className="divstlogo">
       <img id="stlogo" src="stlogo.jpg"/>
       </div>
       <Fade bottom>
       <div className="divmsg">
       
       <h2 id="msg">Stay tune with us for more updates !</h2>
       
       </div>
       </Fade>
    </div>)
}
export default Videos;