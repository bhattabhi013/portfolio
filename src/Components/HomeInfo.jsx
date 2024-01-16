import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ txt, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{txt}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
        </div>
    );
}


const renderContent = {
    1 : (
        <h1 className='sm:text-sl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            <span className='font-semibold'>Jai Shri Ram</span>
            <br/>
            Hi, I am <span className='font-semibold'>Abhishek</span> 👋
            <br/>
            A Software Engineer from India
        </h1>
    ),
    2 : (
        <InfoBox 
        txt="Want to know about me? My skills and experience"
        link="/about"
        btnText="Learn more"
        />
    ),
    3 : (
        <InfoBox 
        txt="I've worked on multiple projects, have a look at them"
        link="/projects"
        btnText="View Projects"
        />
    ),
    4 : (
        <InfoBox 
        txt="Looking for a dev? or got any exciting project idea"
        link="/contact"
        btnText="Let's talk"
        />
    )
}



const HomeInfo = ({ currentStage }) => {
 
  return renderContent[currentStage] || null;
}

export default HomeInfo