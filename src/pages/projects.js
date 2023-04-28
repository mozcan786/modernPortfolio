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
        <article className=' flex w-full items-center justify-between relative rounded-br-2xl rounded-3xl  border border-solid border-dark bg-light shadow-2xl p-12'>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2.5rem]   bg-dark rounded-br-2xl' ></div>
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='flex w-1/2 flex-col items-start justify-between pl-6'>
                <span className='text-xl font-medium text-primary'>{type}</span>
                <Link href={link} target='_blank' className='underline-offset-2 hover:underline'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className=' my-2 rounded-md font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='relative flex flex-col w-full items-center justify-center rounded-2xl rounded-br-2xl  border border-solid border-dark bg-light p-6 shadow-2xl'>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2rem]   bg-dark rounded-br-3xl' ></div>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }} />
            </Link>
            <div className='flex w-full flex-col items-start justify-between pl-6'>
                <span className='text-xl font-medium text-primary'>{type}</span>
                <Link href={link} target='_blank' className='underline-offset-2 hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className=' text-lg font-semibold underline'>Visit</Link>
                    <Link href={github} target='_blank' className='w-8'>{""} <GithubIcon />{""}</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head >
                <title>CodeBucks | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='mb-16  flex w-full flex-col items-center justify-center'>
                <Layout>
                    <AnimatedText text="Imagination Trumps Knowledge!" />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 '>
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
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"

                            />
                        </div>
                        <div className='col-span-6'>
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
                        <div className='col-span-6'>
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Fetaured Project"

                            />
                        </div>
                        <div className='col-span-6'>
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