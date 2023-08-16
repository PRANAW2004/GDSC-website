import React from "react";
import Navbar from "./navbar";
import Home from "./home-intro";
import Detail from "./detail";
import Contact from "./contact";
import { Fade } from "react-awesome-reveal";
function Home1(){
    return(<div>
            <Fade>
        <Navbar />
        </Fade>
        <Fade>
        <Home />
        </Fade>
        <Fade>
        <Detail />
        </Fade>
        <Fade>
        <Contact />
        </Fade>

    </div>)
}

export default Home1;