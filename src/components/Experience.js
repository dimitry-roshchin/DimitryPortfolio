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
               <Details position="Software Developer" company="Volk Digital" companyLink="https://www.volkwebdev.com/"
               time="2018-Present" address="Pensacola , FL"
               work="Develop and maintain multiple web applications using React, Next.js, and Tailwind CSS, resulting in improved user experience and increased customer satisfaction.
               Design and implement RESTful APIs, enabling seamless integration between the front-end and back-end systems.
               Utilize SQL databases to manage and store application data, ensuring data integrity and efficient retrieval.
               Collaborate with cross-functional teams, including designers and product managers, to deliver high-quality software solutions within project timelines.
               Conduct code reviews and provide constructive feedback to team members, promoting code quality and adherence to best practices."/>

                <Details position="Web Developer" company="Barnes & Co." companyLink=""
               time="2018" address="Pensacola , FL"
               work="Assisted in developing and maintaining web applications using React and Next.js, contributing to the company's product portfolio.
               Worked closely with senior developers to implement responsive UI designs using Tailwind CSS, enhancing the user experience.
               Supported API development efforts by creating and consuming API endpoints, facilitating data exchange between front-end and back-end systems.
               Gained practical experience in working with SQL databases, writing SQL queries, and performing basic database administration tasks."/>

                 
            </ul>
        </div>
    </div>
  )
}

export default Experience