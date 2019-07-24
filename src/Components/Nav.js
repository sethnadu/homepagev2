import React from "react";
import {NavLink} from "react-router-dom";

function Nav () {
    return (
        <div className ="navBar">
            <div className ="navHeadings">
                <NavLink to="/professional" activeClassName="active" className ="decoration"><p>Professional</p></NavLink>
                <NavLink exact to="/"><h1 className ="decoration">Seth's HomePage</h1></NavLink>
                <NavLink to="/personal" activeClassName ="active"><p>Personal</p></NavLink>
            </div>
        </div>
    )
}

export default Nav;