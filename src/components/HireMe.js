import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HireMe = () => {
  return (
    <div className='fixed right-10 bottom-12 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>

        <CircularText className={"fill-dark animate-spin-slow"}/>   
        <Link href="mailto:dimi.roshchin@gmail.com" className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#577581] 
        text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full hover:bg-[#8ea3ae] hover:text-dark'>Projects</Link>
            
        </div>    
    </div>
  )
}

export default HireMe