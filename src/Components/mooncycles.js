import React from "react";

function MoonPhases(props) {
    console.log(props)
    return (
        <div className ="cycles">
        {Object.values(props.phases).map((phase) => {
            return (
                <div className ="eachCycle" key ={phase.date}>
                <p className ="p1">{phase.phase}</p>
                <p className ="p2">{phase.date}</p>
                </div>
            );
        })}
        </div>
    )
} 

export default MoonPhases;