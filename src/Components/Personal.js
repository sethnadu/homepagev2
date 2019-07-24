import React from "react";
import {Link} from "react-router-dom"

//images
import espnfantasyLogo from "../Assets/Personal-images/espnfantasy.png";
import yahoofantasyLogo from "../Assets/Personal-images/yahoofantasy.png";
import gmailLogo from "../Assets/Personal-images/gmail.png";
import gmailcalenderLogo from "../Assets/Personal-images/googlecalender.png";
import googledriveLogo from "../Assets/Personal-images/googledrive.png";
import bleacherreportLogo from "../Assets/Personal-images/bleacherreport.png";
import anrestorationLogo from "../Assets/Personal-images/anrestoration.png";


function Personal () {
    return (
        <div className = "Tab right">
        <h2>Personal</h2>
        
        <hr></hr>
        <div className = "proSection">
            <img className = "logo" src = {espnfantasyLogo} alt = "ESPN Logo" />
            <div className ="proSection-text">
            <a href = "https://www.espn.com/fantasy/football/">ESPN Fantasy Football</a>
            <p>Check Your Team</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {yahoofantasyLogo} alt = "Yahoo Logo" />
            <div className ="proSection-text">
            <a href = "https://profiles.sports.yahoo.com/">Yahoo Fantasy Football</a>
            <p>Check Your Team</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {gmailLogo} alt = "Gmail Logo" />
            <div className ="proSection-text">
            <a href = "https://mail.google.com/mail/u/0/#inbox">Gmail</a>
            <p>Gmail Account</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {gmailcalenderLogo} alt = "Google Calender Logo" />
            <div className ="proSection-text">
            <a href = "https://calendar.google.com/calendar/r">Google Calender</a>
            <p>Check Events</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {googledriveLogo} alt = "Google Drive Logo" />
            <div className ="proSection-text">
            <a href = "https://drive.google.com/drive/my-drive">Google Drive</a>
            <p>Drive Storage</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {bleacherreportLogo} alt = "Bleacher Report Logo" />
            <div className ="proSection-text">
            <a href = "https://bleacherreport.com/">Bleacher Report</a>
            <p>Sports News</p>
            </div>
        </div>

        <div className = "proSection">
            <img className = "logo" src = {anrestorationLogo} alt = "Andrew Nadu Restoration and Masonry Logo" />
            <div className ="proSection-text">
            <a href = "https://andrewnadurestoration.netlify.com/">Andrew Nadu</a>
            <p>Restoration and Masonry</p>
            </div>
        </div>
        <Link style ={{textDecoration: "none", color:"black", fontWeight: "bold"}} to="/" ><p>Close</p></Link>




        </div>
    )
}

export default Personal;
