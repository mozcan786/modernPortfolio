import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className=' relative flex w-full items-center  justify-between rounded-3xl 
        rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl  
        dark:border-light dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4'>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] ' ></div>
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
            </Link>
            <div className='flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='underline-offset-2 hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl'>{title}</h2>
                </Link>
                <p className=' my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link name="Github" aria-label='Checkout my github profile' href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base '>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='relative flex w-full flex-col items-center justify-center rounded-2xl  
        rounded-br-2xl  border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark  xs:p-4 '>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]  ' ></div>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
            </Link>
            <div className='flex w-full flex-col items-start justify-between pl-6'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='underline-offset-2 hover:underline'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='rounded text-lg font-medium underline md:text-base '>Visit</Link>
                    <Link name="Github" aria-label='Checkout my github profile' href={github} target='_blank' className='w-8 md:w-6'>{""} <GithubIcon />{""}</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head >
                <title>Portfolio | Project Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='mb-16  flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xl:text-6xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link="/"
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects