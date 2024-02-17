"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Aboutme = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-gray-200 mb-10 mt-[10px] text-center text-6xl'
            >
                About Me
            </motion.div>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[60px] px-[600px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                <h1 className="Welcome-text text-[13px]">
                    T
                </h1>
            </motion.div>
        </div>
    )
}

export default Aboutme