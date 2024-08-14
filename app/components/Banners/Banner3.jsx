'use client'
import { FadeLeft, FadeUp } from '@/app/utility/animation'
import BannerPng from "../../../public/assets/banner-bg.jpg"
import { FadeRight } from '@/app/utility/animation'
import {motion} from "framer-motion"
import Image from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'

const bgStyle = {
    backgroundImage: `url('/assets/banner-bg.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
};

const Banner3 = () => {
  return (
    <section className='container mb-12'>
        <div 
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14 rounded-3xl">
            {/* Blank Div */}
            <div></div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4
                lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className='text-3xl lg:text-6xl font-bold uppercase'
                    >GET FRESH FRUITS TODAY</motion.h1>
                    <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Provident suscipit velit deserunt nesciunt quasi 
                        accusantium voluptatibus distinctio vel.
                    </motion.p>
                    <motion.p
                    variants={FadeLeft(1.1)}
                    initial="hidden"
                    whileInView="visible"                  
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Magni, totam? Rerum aliquam voluptas repellendus minima.
                    </motion.p>
                    {/* BTN SECTION */}
                    <motion.div
                    variants={FadeLeft(0.9)}
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center md:justify-start'>
                        
                        <button className="primary-btn flex items-center gap-2">
                        <span> <MdOutlineShoppingCart /> </span>
                             Order Now </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner3