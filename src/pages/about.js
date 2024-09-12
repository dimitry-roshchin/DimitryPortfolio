import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/pic.jpg";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { darkMode } from '../../tailwind.config';
import TransitionEffect from '@/components/TransitionEffect';


const AnimatedNumbers = ({value}) => {
const ref =useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once: true});


useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView,value,motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>

}

const about = () => {
  return (
    <>
    <Head> 
        <title>About Dimitry | Web Developer</title>
        <meta name='description' content='any description' />
    </Head>

    <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text="About Dimitry" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-10 sm:mt-10'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mb-12 '>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    
                        <p className='font-medium '>I'm a software engineer with five years of experience working with Vue, TypeScript, and .NET. 
                            Over the years, I've built and maintained scalable applications, gaining hands-on experience with containerization tools like Docker and Kubernetes. 
                            My focus has always been on writing clean, efficient code and delivering solutions that meet both user and business needs.</p>

                        <p className='my-4 font-medium'>
                        In addition to my technical skills, I’ve worked in Scrum and Agile environments, which has helped me collaborate effectively with cross-functional teams. 
                        I’m a strong team player who believes in open communication and working together to solve problems and deliver great results.
                        </p>

                        <p className='font-medium'>
                        If you have any questions about my experience, feel free to reach out to me through <a href='https://wwww.linkedin.com/in/dimitry-roshchin'>LinkedIn</a> or <a href="mailto:dimi.roshchin@gmail.com?subject=Hey There Dimitry!">E-mail.</a>
                        </p>
                </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 md:border-4 border-solid border-dark bg-light 
                      p-8 dark:bg-dark dark:border-[#b7b7b7] xl:col-span-4 md:order-1 md:col-span-8 md:mb-10'>

                    
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-[#b7b7b7] md:hidden'/>

                        <Image src={profilePic} alt="Dimitry Roshchin Profile Picture" className='w-full h-auto  rounded-2xl'
                        priority 
                        sizes="(max-width: 760px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"/>
                       
                        
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                        <div className='flex flex-col items-end justify-center xl:items-center '>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={""}/>&#8734;
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Coffees Per Day</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={40}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>

                    </div>
                  
            </div>
            
            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about