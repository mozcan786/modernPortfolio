import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='cursor-pointer w-max origin-center absolute  font-semibold bg-dark 
        text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:mt-32'>Skills</h2>
            <div className='w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  
                 mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  
                 sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  '>
                <motion.div className='cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark 
                  dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2  '
                    whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>
                <Skill name="HTML" x="-25vw" y="-2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="Bootstrap" x="20vw" y="6vw" />
                <Skill name="Tailwind CSS" x="0vw" y="12vw" />
                <Skill name="Sass" x="15vw" y="-12vw" />
                <Skill name="JavaScript" x="-20vw" y="-18vw" />
                <Skill name="ReactJS" x="28vw" y="-4vw" />
                <Skill name="VueJS" x="0vw" y="-20vw" />
                <Skill name="NextJS" x="25vw" y="18vw" />
                <Skill name="NuxtJS" x="-18vw" y="18vw" />
            </div>
        </>
    )
}

export default Skills