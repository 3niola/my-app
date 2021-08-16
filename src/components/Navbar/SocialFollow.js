import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './SocialFollow.css';

function SocialFollow() {
    return (
        <div class = "social-container">
            <div className= "socail">

            <a href= "https://www.linkedin.com/in/ayodele-ishola/"
            className="falinkedin ">
                <FaIcons.FaLinkedin font-size='1.5rem'/>
            </a>
            <a href= "mailto:ayodeleishola@hotmail.com"
            className="famail">
                <FaIcons.FaMailBulk font-size='1.5rem'/>
            </a>
            </div>
        </div>
    ); 
}

export default SocialFollow
