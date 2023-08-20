import React from "react";
import Event from "./Events/events";
import EventHead from "./Events/event-head";
import { Slide,Fade } from "react-reveal";
function Eventmain(){
    return(<div className="event-main-body">
        <Fade>
        <EventHead />
        </Fade>
        <div className="event-main1">
        <Fade>
        <Event title="     Inauguration Event" date="Date: 17/08/2023" timings="Timings: 10:00 AM - 11:30 AM" mode="Mode: In Person" />
        <Event title="Google Cloud Basics Session 1" date="Date: 22/08/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Google Cloud Basics Session 1" date="Date: 22/08/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Contest on Google Cloud Basics" date="Date: " timings="Timings: " mode="Mode: In Person" />
        <Event title="Google Cloud Basics Advanced Topics Session 1" date="Date: 28/08/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Google Cloud Basics Advanced Topics Session 2" date="Date: 30/08/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Contest on Google Cloud Advanced Topics" date="Date: 02/09/2023" timings="Timings:" mode="Mode: In Person" />
        <Event title="Basics on Computer Vision Based Technologies Session 1" date="Date: 07/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Basics on Computer Vision Based Technologies Session 1" date="Date: 08/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Contest on Computer Vision Basics" date="Date: 09/09/2023" timings="Timings: " mode="Mode: In Person" />
        <Event title="Advanced Topics of Computer Vision Session 1" date="Date: 12/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Advanced Topics of Computer Vision Session 2" date="Date: 13/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Speaker Session/ Tech Talk" date="Date: 17/09/2023" timings="Timings: 10:00 AM - 12:00 PM" mode="Mode: Online" />
        <Event title="Contest on Computer Vision and Event" date="Date: 23/09/2023" timings="Timings: " mode="Mode: In Person" />
        <Event title="Google Bar Feast" date="Date: 23/09/2023" timings="Timings: " mode="Mode: In Person" />
        <Event title="Android Development Campaign" date="Date: 09/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Android Development Campaign" date="Date: 10/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        <Event title="Android Development Campaign" date="Date: 11/09/2023" timings="Timings: 3:45 PM - 5:00 PM" mode="Mode: In Person" />
        </Fade>
        </div>
    </div>)
}

export default Eventmain;