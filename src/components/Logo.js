import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className='w-16 h-16 bg-dark text-light hover:text-dark flex items-center justify-center rounded-full text-xl font-bold border
      border-solid border-transparent dark:border-light dark:hover:text-dark' 
      
      whileHover={{
        backgroundColor: ["#2d2e2e","#edb98b", "#5199e4","#edb98b","#d4a67b", "#3c4f5b", "#ff4d70"],
        transition:{duration: 1, repeat: Infinity}
      }}

      >DR</MotionLink>
    </div>
  )
}

export default Logo 