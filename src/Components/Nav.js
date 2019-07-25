import React from "react";
import {NavLink, Link} from "react-router-dom";

import Logo from "../Assets/app.png"


function Nav () {
    return (
        <div className ="navBar">
            <div className ="navHeadings">
                <NavLink style={{textDecoration: 'none'}} to="/professional" activeClassName="active" ><p>Professional</p></NavLink>
                <Link style={{textDecoration: 'none'}} to="/"><img alt ="seth's logo" src ={Logo} width = "80px" /></Link>
                <NavLink style={{textDecoration: 'none'}} to="/personal" activeClassName ="active"><p>Personal</p></NavLink>
            </div>
        </div>
    )
}

export default Nav;