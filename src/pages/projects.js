import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import iphone from "../../public/images/projects/pricing.png"
import project4 from "../../public/images/projects/construct4.png"
import project6 from "../../public/images/projects/portfolio1.png"
import Image from 'next/image'
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);



const FeaturedProject= ({type, title, summary, img, link}) =>{

  return(
    
    <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl
     dark:bg-dark dark:border-[#b7b7b7] dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-[#b7b7b7] xs:-right-2 sm:h-[103%] 
      xs:w-full xs:rounded-[1.5rem]'/>  

       <Link href={link} target='_blank' 
       className='w-1/2  cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage src={img} alt={title} className="w-full h-auto"
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
              priority 
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw"
            />
       </Link>

       <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>

          <span className='text-dark font-medium text-xl dark:text-light xs:text-base'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-3xl'>{title}</h2>
       </Link>
       <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
       <div className='mt-2 flex items-center'>
       <Link href={link} target='_blank' className='ml-4 rounded-lg bg-light text-dark border-2 border-solid border-[#ff4d70] hover:bg-[#ff4d70] hover:text-light
        dark:hover:bg-[#ff4d70] dark:hover:text-dark p-2 px-6 text-lg font-semibold
        dark:bg-dark dark:text-light sm:px-4 sm:text-base'>Visit Project</Link>


       </div>
        
       </div>

    </article>

  )

}

const Project= ({title, type, img, link}) =>{

  return(

    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-2xl border-dark bg-light p-6 relative 
     dark:bg-dark dark:border-[#b7b7b7] dark:text-light xs:p-4'>
      

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-[#b7b7b7] 
                  md:-right-2  md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/> 
<Link href={link} target='_blank' 
       className='w-full cursor-pointer overflow-hidden rounded-lg'>


<FramerImage src={img} alt={title} className="w-full h-auto"
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
            />
       </Link>

       <div className='w-full flex flex-col items-start justify-between mt-4'>

          <span className='text-dark font-medium text-xl dark:text-light lg:text-lg md:text-base '>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
       </Link>
       <div className='w-full mt-2 flex items-center justify-between'>

       <Link href={link} target='_blank' className='underline text-lg font-semibold text-[#ff4d70] md:text-base'>Visit</Link>

       </div>
        
       </div>
    </article>



  )
}

const projects = () => {
  return (
    <>
    
    <Head> 
        <title>Portfolio | Dimitry Roshchin</title>
        <meta name='description' content='any description' />
    </Head>

    <TransitionEffect/>

    <main className='w-full mb-16 flex flex-col items-center justify-center'>
<Layout className='pt-16 '>
  <AnimatedText text="Projects" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

  <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

    <div className='col-span-12'>

      <FeaturedProject 
      title="Product Landing Page"
      img={iphone}
      summary="Landing page using React JS (CRA), GSAP for scolling animations, styled-components for styling and Three.JS for 
      rendering the 3D model."
      link="https://landing-iphone.vercel.app/"
      type="Vercel Hosting"      
      
      />
      
    </div>

    <div className='col-span-6 sm:col-span-12 md:col-span-12'>
      <Project 
      title="AI Notifications App"
      img={project4}
      link=""
      type="Under Construction"      
      
      /></div>
    <div className='col-span-6 sm:col-span-12 md:col-span-12'>
    <Project 
      title=" Next.Js Portfolio"
      img={project6}
      link=""
      type="Vercel Hosting"      
      
      />
    </div>

    <div className='col-span-12'>
    <FeaturedProject 
      title="MyLibrary"
      img={project4}
      summary="Library web app that allows users to display physical and digital libraries.
       Technologies being used are Next.js, Tailwind-CSS, SQL, Firebase."
      link=""
      type="Under Construction"      
      
      />

    </div>

  </div>
</Layout>

    </main>
    
    
    </>
  )
}

export default projects