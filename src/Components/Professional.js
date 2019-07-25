import React from "react";
import {Link} from "react-router-dom";


//images
import lambdaLogo from "../Assets/School-images/lambdaLogo.png";
import githubLogo from "../Assets/School-images/Github.png";
import codepenLogo from "../Assets/School-images/codepen.png";
import codesandboxLogo from "../Assets/School-images/codesandbox.png";
import replLogo from "../Assets/School-images/repl.png";
import netlifyLogo from "../Assets/School-images/netlify.png";
import namecheapLogo from "../Assets/School-images/namecheap.png";
import linkedinLogo from "../Assets/School-images/linkedin.png";
import portfolioLogo from "../Assets/School-images/portfolio.png";


function Professional () {
        return (
            <div className = "Tab left">
                <h2>Professional</h2>
                <hr></hr>
            <div className = "proSection">
                <img className = "logo" src = {lambdaLogo} alt = "Lambda Logo" />
                <div className ="proSection-text">
                <a href = "https://dashboards.lambdaschool.com/students/seth-nadu/">Lambda DashBoard</a>
                <p>Check Your Grades</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {lambdaLogo} alt = "Lambda Logo" />
                <div className ="proSection-text">
                <a href = "https://learn.lambdaschool.com/course/cs-fsw">Training Kit</a>
                <p>Learn New Info</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {githubLogo} alt = "Github Logo" />
                <div className ="proSection-text">
                <a href = "https://github.com/sethnadu">GitHub</a>
                <p>Profile with Repos</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {codepenLogo} alt = "Codepen Logo" />
                <div className ="proSection-text">
                <a href = "https://codepen.io/sethna/">Codepen</a>
                <p>CodePen Files</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {codesandboxLogo} alt = "CodesandBox Logo" />
                <div className ="proSection-text">
                <a href = "https://codesandbox.io/dashboard/recent">CodeSandbox</a>
                <p>CodeSandbox Files</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {replLogo} alt = "Repl.it Logo" />
                <div className ="proSection-text">
                <a href = "https://repl.it/@SethNadu">Repl.it</a>
                <p>Challenges</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {netlifyLogo} alt = "Netlify Logo" />
                <div className ="proSection-text">
                <a href = "https://app.netlify.com/teams/sethnadu/sites">Netlify</a>
                <p>Netlify Sites</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {namecheapLogo} alt = "NameCheap Logo" />
                <div className ="proSection-text">
                <a href = "https://ap.www.namecheap.com/">NameCheap</a>
                <p>Porfolio Website Manage</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {linkedinLogo} alt = "LinkedIn Logo" />
                <div className ="proSection-text">
                <a href = "https://www.linkedin.com/in/seth-nadu-8b5983187/">LinkedIn</a>
                <p>LinkedIn Website</p>
                </div>
            </div>

            <div className = "proSection">
                <img className = "logo" src = {portfolioLogo} alt = "Seth Nadu Portfolio Logo" />
                <div className ="proSection-text">
                <a href = "https://www.sethnadu.com/">Portfolio</a>
                <p>Seth Nadu Portfolio</p>
                </div>
            </div>
            <Link style ={{textDecoration: "none", color:"black", fontWeight: "bold"}} to="/" ><p>Close</p></Link>



            </div>
        )
}

export default Professional