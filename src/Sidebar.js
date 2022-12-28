// importing icons and images for sidebar section
import React from 'react';
import image from './Me.jpg';
import location from './location-icon.png';
import email from './envelope-icon.png';
import mobile from './Phone-icon.png';
import github from './Github-icon.png';
import linkedin from './Linkedin-icon.png';

// declaration of functional component sidebar
function Sidebar() {
    return(
        // markup for the sidebar section
        <div className='Sidebar-wrapper'>
            <div className='profile-wrapper'>
                <img className='profile-image' src={image}></img>
                <h2 className='profile-name'>Robert Smith</h2>
                <h3 className='profession'>Junior Web Developer</h3> 
                <div className='hr'></div>
                {/* markup of the location line on sidebar */}
                <div className='location'>
                    <img className='location-icon' src={location}></img>
                    <h3 className='location-text'>Leeds, West Yorkshire, UK</h3>
                </div>
                {/* markup for the email line on sidebar */}
                <div className='email'>
                    <img className='email-icon' src={email}></img>
                    <h3 className='email-text'>roba.smith@hotmail.com</h3>
                </div>
                {/* markup for mobile line on sidebar */}
                <div className='mobile'>
                    <img className='mobile-icon' src={mobile}></img>
                    <h3 className='mobile-text'>07462801850</h3>
                </div>
                <div className='hr'></div>
                {/* markup for two icon links */}
                <div className='links-container'>
                    <a href="https://github.com/RobSmithDevelopment"><img className='github-icon' src={github}></img></a>
                    <a href="https://www.linkedin.com/in/robert-smith-62928b214/"><img className='linkedin-icon' src={linkedin}></img></a>
                </div>
                <div className='hr'></div>
                <p>This CV is built with <a href='https://reactjs.org/'>React</a></p>
            </div>
        </div>
    )
}
// exporting sidebar component 
export default Sidebar;