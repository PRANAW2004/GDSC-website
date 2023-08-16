import React from "react";
import { Fade,Rotate,Slide,Flip } from "react-reveal";
import { useHref, useNavigate } from "react-router-dom";
function Detail(){
    const history = useNavigate();
    function EventNav(){
        history("/events");
    }
    function TheTeam(){
        history("/team")
    }
    return(<div>
        <div className="info1" id="det-content">
            <div className="aim">
                <Slide left>
                <h1>Our Aim</h1>
                </Slide><br></br>
                <Flip top>
                <p>Our Aim is to make students from diverse backgrounds to get together and work on a common real world problem using various Google technology. Our focus is not only on conducting workshops or seminars but to have an outcome from that events.</p>
                </Flip>
            </div>
            <div className="team">
                <Slide right>
                <h1>Team Members</h1><br></br>
                </Slide>
                <Flip bottom>
                <p>Get to know about our team members who work hard like an ant in the summer for the club. Our Core team members strive to uplift the members of the club in various emerging technologies like Google Cloud, Artificial Intelligence and MAchine Learning, Tensorflow, Keras, Web Development, App Development etc.</p><br></br>
                </Flip>
                <Fade bottom>
                <button className="btn btn-lg btn-outline-dark" onClick={TheTeam}>The Team</button>
                </Fade>
            </div>
            <div className="join">
                <Flip top>
                <h1>Join Us!</h1>
                </Flip>
                <br></br>
                <Flip bottom>
                <p>Join our GDSC Prathyusha family and become a part of a Global Community. You will have a enhancing peer to peer learning environment and do hands on projects with an industrial exposure.</p><br></br>
                <p>It is an one step Go. Click on the <b>Join Now</b> button below to be a part of a Global community and expand your network.</p><br></br>
                </Flip>
                <Fade bottom>
                <button className="btn btn-lg btn-outline-dark" onClick={() => window.location.href='https://gdsc.community.dev/prathyusha-engineering-college/'}>Join Now</button>
                </Fade>
            </div>
            <div className="events">
                <Flip bottom>
                    <h1>Events</h1>
                </Flip>
                <br></br>
                <Flip top>
                    <p>Take a Look at the events we have conducted and the events we are conducting in the future. Stay tune with us and join us in the events to enhance peer to peer learning.</p>
                </Flip>
                <Fade top>
                <button className="btn btn-lg btn-outline-dark" onClick={EventNav}>Events</button>
                </Fade>
            </div>
        </div>
    </div>)
}

export default Detail;