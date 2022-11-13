import React from 'react';
import { motion } from 'framer-motion';

const AboutImg = () => {
  return (

         <div>
        <motion.img 
        whileHover={{scale:1.05}}

        className="about__img w-100 mt-5"
         src="https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  )
}

export default AboutImg