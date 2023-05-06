import React from 'react'
// import  Tilt  from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import {  services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
  <p>{title}</p>
  
  )
}


const About = () => {
  return (
    <>
  <motion.dev variant={textVariant}>
    <p className={styles.sectionSubText}
    >Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
  </motion.dev>

  <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px max-w-3xl lead-[30px]'
  > I'm a motivated tech professional and problem solver with a background in big data. Experience with analytical thinking, project manage, strong team skills, and excellent verbal and written communication.
  Trained at [University of Central Florida (UCF)] coding boot camp and earned a certificate in Full-Stack Web Development.
  Innovative problem-solver passionate about developing apps; focused development. Strengths in creativity, teamwork, and building projects from ideation to execution.
  </motion.p>

  <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) => (
      <ServiceCard  key={service.title} index={index} {...service} />
    ))}
  </div>
    </>
  )
}

export default About