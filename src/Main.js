// importing icons for CV
import React from 'react';
import user from './User-icon.png';
import history from './History-icon.png';
import project from './Project-icon.png';

// declaration of functional component Main
function Main() {
    return(
        // markup for the main section of the CV
        <div className='main-wrapper'>
           <div className='mainContent-wrapper'>
                
                <div className='about-wrapper'>
                    <img className='about-icon' src={user}></img>
                    <h3 className='header'>About me</h3>
                </div> 
                <div className='hr-main'></div>
                
                {/* markup for about me section */}
                <p className='about-text'>As a soon-to-be graduate of a web development bootcamp, I am excited to begin my career as a junior web developer. 
                With a strong foundation in HTML, CSS, JavaScript, aswell as React and Nodejs, I am confident in my ability to create dynamic and user-friendly websites and web applications. 
                In addition to my technical skills, I am a fast learner and highly motivated individual with a passion for problem-solving and continuous learning. 
                I am eager to join my first team and contribute my skills and enthusiasm to help build and maintain innovative web projects.</p>
                
                {/* markup for the education section of CV */}
                <div className='education-wrapper'>
                    <img className='education-icon' src={history}></img>
                    <h3 className='header'>Education</h3>
                </div>
                
                <div className='hr-main'></div>
                {/* markup for education section of CV */}
                <h3 className='education-name'>HyperionDev - <span className='education-type'>Web Development Bootcamp</span></h3>
                <p className='education-date'>2022</p>
                <p className='education-instance'>Web Development Bootcamp in a Department For Education scholarship funded position. Teaching a strong basis in HTML,
                CSS, JavaScript, React and Node among other programming fundamentals - <b>average grade: 100%</b></p>

                <h3 className='education-name'>Allerton Grange High School - <span className='education-type'>A Levels</span></h3>
                <p className='education-date'>July 2012</p>
                <p className='education-instance'>English Literature - B</p>
                <p className='education-instance'>Drama - C</p>
                <p className='education-instance'>English Language - B</p>

                <h3 className='education-name'>Other - <span className='education-type'>Udemy</span></h3>
                <p className='education-date'>2022</p>
                <p className='education-instance'>Full Stack Web Development Bootcamp</p>
                <p className='education-instance'>The Modern React Bootcamp</p>
                
                {/* markup for projects section of CV */}
                <div className='project-wrapper'>
                    <img className='project-icon' src={project}></img>
                    <h3 className='header'>Projects</h3>
                </div>
                <div className='hr-main'></div>

                <h3 className='project-name'>Weather App - <span className='education-type'>HTML, CSS, JavaScript, Api handling</span></h3>
                <p className='project-instance'>Utilizing APIs, I implemented a feature that allows users to input the name of a city and receive a background image relevant to that location, 
                an icon representing the current weather conditions, and a detailed breakdown of the weather data. </p>

                <h3 className='project-name'>Fictional Business Website - <span className='education-type'>HTML, CSS, JavaScript</span></h3>
                <p className='project-instance'>Full website project containing multiple pages and various JavaScript implemented features such as a 'save for later feature' allowing
                users to save items on the website and store them on a save for later page and a fully functional comments section.</p>

                <h3 className='references'>References available upon request</h3>
            </div>
        </div>
    )
}
// export Main component
export default Main;