import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer  absolute'
            whileHover={{ scale: 1.05 }}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}


const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center '>Skills</h2>
            <div className='w-full h-screen  relative bg-circularLight flex items-center justify-center  mb-64  rounded-full'>
                <motion.div className='cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark '
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-25vw" y="-2vw"/>
                <Skill name="CSS" x="-5vw" y="-10vw"/>
                <Skill name="Bootstrap" x="20vw" y="6vw"/>
                <Skill name="Tailwind CSS" x="0vw" y="12vw"/>
                <Skill name="Sass" x="15vw" y="-12vw"/>
                <Skill name="JavaScript" x="-20vw" y="-18vw"/>
                <Skill name="ReactJS" x="28vw" y="-4vw"/>
                <Skill name="VueJS" x="0vw" y="-20vw"/>
                <Skill name="NextJS" x="25vw" y="18vw"/>
                <Skill name="NuxtJS" x="-18vw" y="18vw"/>

            </div>
        </>
    )
}

export default Skills