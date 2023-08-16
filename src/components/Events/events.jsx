import React from "react";

function Event(props){
    return(<div className="event1">
                <div className="card">
                    <div className="card-header" id="card-header1" style={{backgroundImage: (props.image)}}>
                        <h1>{props.title}</h1>
                    </div>
                    <div className="card-body" id="card-body1">
                        <h3>{props.date}</h3>
                        <h4>{props.timings}</h4>
                        <h4>{props.mode}</h4>
                    </div>
                </div>
    </div>)
}

export default Event;
