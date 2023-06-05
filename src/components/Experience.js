import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

       <LiIcon reference={ref}/>
        <motion.div 
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target='_blank' className='text-[#ff4d70] capitalize dark:text-[#ff4d70]'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }

    )
  return (
    <div className='my-32'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-[#b7b7b7] md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               <Details position="Web Developer" company="Volk Digital" companyLink="https://www.volkwebdev.com/"
               time="2018-Present" address="Pensacola , FL"
               work="Write clean, organized, and maintainable code using modern front-end frameworks such as React and Next,
               Develop and maintain website architecture, ensuring scalability and efficiency, while adhering to best practices and standards,
               Ensure cross-browser compatibility and optimize website performance using techniques such as code splitting, tree shaking, and lazy loading
Troubleshoot and debug issues utilizing debugging tools such as Chrome DevTools and React Developer Tools"/>

                <Details position=" Jr. Developer" company="Barnes & Co." companyLink=""
               time="2018" address="Pensacola , FL"
               work="Collaborated with senior developers to develop and maintain company websites,
               Assisted with troubleshooting and debugging issues as they arose,
               Worked on various projects using React and Angular frameworks,
               Participated in code reviews and contributed to the development of coding standards."/>

                <Details position="Solutions Consultant" company="Verizon" companyLink="https://www.verizon.com"
               time="2014-2018" address="Pensacola , FL"
               work="Build and maintain strong relationships with customers, earning their trust and loyalty
               Meet and exceed sales targets and performance metrics
               Continuously develop and enhance technical and sales skills through training and self-study
               Contribute to the development of sales strategies and tactics that drive revenue growth and customer satisfaction"/>     
            </ul>
        </div>
    </div>
  )
}

export default Experience