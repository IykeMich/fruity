'use client'
import Image from 'next/image'
import React from 'react'
import {IoBagHandleOutline} from "react-icons/io5"
import HeroPng from "@/public/assets/fruit-plate.png"
import LeafPng from "@/public/assets/leaf.png"
import { FadeRight } from '@/app/utility/animation'
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'

const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), {
  ssr: false
})

export default function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10' >
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <MotionH1 
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className='txt-5xl lg:text-6xl font-bold leading-relaxed
                 xl:leading-loose font-averia'>Healthy
                <br />
                Fresh <span className='text-secondary'>Fruits</span>
                </MotionH1>

                <motion.p 
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
                <motion.p
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"
                className='text-gray-400' >
                    Healthy and yummy food for fresh morning breakfast. Eat Daily for
                    good health and mind order now and get 20% odd on your order
                </motion.p>
                {/* button section */}
                <motion.div
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"
                className='flex justify-center md:justify-start'>
                    <button className="primary-btn flex items-center gap-2">
                        <span> <IoBagHandleOutline /> </span>
                        Order Now</button>
                </motion.div>
            </div>
        </div>
        {/* Hero Images */}
        <div className='flex justify-center items-center'>
            <motion.div
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}            
            >
            <Image 
            src={HeroPng} alt='Hero Img' className="w-[350px]
            drop-shadow" />
            </motion.div>
        </div>
        {/* Leaf Image */}
        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
        <motion.div
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}        
        >
            <Image src={LeafPng} alt='' 
            className='w-full md:max-w-[300px]' />
            </motion.div>
        </div>
      </div>
    </section>
  )
}
