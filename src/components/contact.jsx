import React from "react";

function Contact(){
    return(<div id="contact">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Connect with us on social media</p>
            <div className="contact">
                <div className="row1">
                        <img src="Linkedin.svg" style={{cursor: "pointer"}} alt="LinkedIn-image"></img>
                        <img src="twitter.png" onClick={()=> window.location.href='https://twitter.com/GdscPrathy81450'} style={{cursor: "pointer"}} alt="Twitter-image"></img>
                        <img src="insta.png" onClick={()=> window.location.href='https://www.instagram.com/gdsc_prathyusha/'} style={{cursor: "pointer"}} alt="Instagram-image"></img>
                </div>
                <div className="row2">
                    <img src="facebook.png" style={{cursor: "pointer"}} alt="Facebook-image"></img>
                    <img src="youtube.png" style={{cursor: "pointer"}} alt="Youtube-image"></img>
                    <img src="github.png" style={{cursor: "pointer"}} alt="Github-image"></img>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact;