import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
    shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold' 
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y, transition: {duration: 1.5}}}
    viewport={{once:true}}>
      
       {name}

    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
    
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 md:mb-8 sm:mb-6 xs:mb-6'>Skills</h2>

    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
      shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.05}}> Web

      </motion.div>

      <Skill name="Three.js" x="-25vw" y="2vw"/>
      <Skill name="TypeScript" x="-5vw" y="-11vw "/>
      <Skill name="Vue" x="23vw" y="6vw"/>
      <Skill name=".NET" x="0vw" y="15vw"/>
      <Skill name="Next" x="-20vw" y="-19vw"/>
      <Skill name="Figma" x="15vw" y="-12vw"/>
      <Skill name="K8" x="32vw" y="-5vw"/>
      <Skill name="GIT" x="0vw" y="-21vw"/>
      <Skill name="React" x="-25vw" y="20vw"/>
      <Skill name="SQL" x="19vw" y="19vw"/>
      <Skill name="Docker" x="-37vw" y="-4vw"/>


    </div>
    
    </>
    )
}

export default Skills