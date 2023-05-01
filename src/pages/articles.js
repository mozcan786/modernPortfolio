import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article6 from "../../public/images/articles/What is higher order component in React.jpg"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }
    return (
        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base'> {title} </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef}
                src={img}
                alt={title}
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl dark:bg-dark dark:border-light">
            <div className='absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark -z-10' ></div>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'> {title} </h2>
            </Link>
            <p className='text-sm mb-2'> {summary} </p>
            <span className='text-primary font-semibold dark:text-primaryDark'> {time} </span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between
            bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light ">
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start  sm:pl-0 xs:text-sm'> {date} </span>
        </motion.li>
    )
}
const articles = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Articles Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xl:text-6xl' />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            img={article1}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />
                        <FeaturedArticle
                            img={article2}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">All Articles</h2>
                    <ul className='flex flex-col items-center relative'>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article5}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article6}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article6}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article6}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article6}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
