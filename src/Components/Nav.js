import React from "react";
import {NavLink, Link} from "react-router-dom";

function Nav () {
    return (
        <div className ="navBar">
            <div className ="navHeadings">
                <NavLink style={{textDecoration: 'none'}} to="/professional" activeClassName="active" ><p>Professional</p></NavLink>
                <Link style={{textDecoration: 'none'}} to="/"><h1 >Seth's HomePage</h1></Link>
                <NavLink style={{textDecoration: 'none'}} to="/personal" activeClassName ="active"><p>Personal</p></NavLink>
            </div>
        </div>
    )
}

export default Nav;