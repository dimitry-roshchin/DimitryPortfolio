import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/hands.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dimitry Roshchin | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 '>
            <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="Dimitry Roshchin Developer" className=" w-[90%] h-auto lg:hidden md:inline-block md:w-full md:pb-10 sm:pb-8
                " priority 
                sizes="(max-width: 760px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                
                <AnimatedText text="Bringing Digital Ideas to Life with Passion and Skill." className='!text-6xl !text-left xl:!text-5xl lg:!text-center
                lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                    Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="https://dimitry-portfolio.vercel.app/about" 
                  className='flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[#ff4d70] hover:text-dark
                  border-2 border-solid border-[#ff4d70]  dark:text-light dark:bg-dark dark:hover:bg-[#ff4d70] dark:hover:text-dark md:bg-[#ff4d70]
                  md:p-2 md:px-4 md:text-base sm:bg-[#ff4d70] '
                  
                  >About Dimitry </Link>
                  <Link href="https://dimitry-portfolio.vercel.app/projects" 
                  className='ml-6 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base '
                  >Projects</Link>
                </div>
                
              </div>
            </div>
            
        </Layout>
        
        
      </main>
    </>
  )
}
