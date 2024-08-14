'use client'

import Image from 'next/image'
import React from 'react'
import { FadeLeft, FadeUp } from '@/app/utility/animation'
import BannerPng from "../../../public/assets/fruits-splash.png"
import { FadeRight } from '@/app/utility/animation'
import {motion} from "framer-motion"

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14">
            {/* Banner Img */}
            <div className='flex justify-center items-center'>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="">
                <Image src={BannerPng} alt='banner img' 
                className='w-[300px] md:max-w-[400px] h-full object-cover
                drop-shadow' />
                </motion.div>
            </div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4
                lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className='text-3xl lg:text-6xl font-bold uppercase'
                    >Brand Info</motion.h1>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident suscipit velit deserunt nesciunt quasi 
                        accusantium voluptatibus distinctio vel.
                    </motion.p>
                    <motion.p
                    variants={FadeUp(1.1)}
                    initial="hidden"
                    whileInView="visible"                  
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Magni, totam? Rerum aliquam voluptas repellendus minima.
                    </motion.p>
                    {/* BTN SECTION */}
                    <motion.div
                    variants={FadeLeft(1.5)}
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center md:justify-start'>
                        <button className="primary-btn"> Learn More </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner