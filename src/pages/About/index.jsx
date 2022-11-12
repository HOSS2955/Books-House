import React from 'react'
import AboutHeader from './AboutHeader';
import "../../assets/css/About.css"
import AboutImg from './AboutImg';
import AboutUs from '../Home/AboutUs';
import OurGoals from './OurGoals';

const index = () => {
  return (
    <div>
        <AboutHeader/>
        <AboutImg/>
        <AboutUs/>
       <OurGoals/>
    </div>
  )
}

export default index