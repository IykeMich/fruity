'use client'

import Image from 'next/image'
import React from 'react'
import { FadeLeft, FadeUp } from '@/app/utility/animation'
import BannerPng from "../../../public/assets/fruit-plate2.png"
import { FadeRight } from '@/app/utility/animation'
import {motion} from "framer-motion"

const Banner2 = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14 md:py-24">

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
                    >ONLINE FRUIT STORE</motion.h1>
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
                        <button className="primary-btn"> Download the App </button>
                    </motion.div>
                </div>
            </div>

            {/* Banner Img */}
            <div className='flex justify-center items-center'>
                <motion.div 
                initial={{ opacity: 0, x: 200, rotate: 75 }}
                whileInView={{ opacity: 1, x: 0, rotate:0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="">
                <Image src={BannerPng} alt='banner img' 
                className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow' />
                </motion.div>
            </div>            
        </div>
    </section>
  )
}

export default Banner2