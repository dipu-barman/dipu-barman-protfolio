import React from 'react';
import AboutMe from '../commponets/AboutMe/AboutMe';
import Skills from '../commponets/Skills/Skills';
import Education from '../commponets/Education/Education';
import Projects from '../commponets/Projects/Projects';
import ContactUs from '../commponets/ContactUs/ContactUs';
import Header from '../commponets/Header/Header';

const Home = () => {
    return (
        <div>
            <div className=''>
                <Header></Header>
            </div>
            
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactUs></ContactUs> 
        </div>
    );
};

export default Home;