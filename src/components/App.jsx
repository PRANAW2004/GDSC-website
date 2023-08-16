import React from "react";
import Home1 from "./Home";
import Eventmain from "./Event-main";
import Team1 from "./Team";
import Videomain from "./Video-main";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App(){
    return(<div>
        <Router>
            <Routes>
                <Route exact path='/' Component={Home1} />
                <Route exact path='/team' Component={Team1} />
                <Route exact path='/events' Component={Eventmain} />
                <Route exact path='/videos' Component={Videomain} />
            </Routes>
        </Router>
    </div>)
}

export default App;