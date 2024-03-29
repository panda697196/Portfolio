"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import SkillLevelContent from "@/components/sub/SkillLevel";

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    My Skills
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Learn and Live
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Never miss a task, deadline or idea
            </motion.div>
            <SkillLevelContent
                categoryName="Languages"
                skills={[
                    {
                        name: 'Python',
                        level: 5,
                    },
                    {
                        name: 'JavaScript',
                        level: 4,
                    },
                    {
                        name: 'TypeScript',
                        level: 4,
                    },


                    {
                        name: 'C#',
                        level: 3,
                    },
                    {
                        name: 'MYSQL',
                        level: 2,
                    },

                ]}
            />
            <SkillLevelContent
                categoryName="Web Frontend"
                skills={[
                    {
                        name: 'Html/WXML',
                        level: 5,
                    },
                    {
                        name: 'CSS/WXSS',
                        level: 4,
                    },

                    {
                        name: 'Tailwind CSS',
                        level: 4,
                    },
                    {
                        name: 'React',
                        level: 3,
                    },
                    {
                        name: 'Vue.js',
                        level: 3,
                    },
                    {
                        name: 'Nuxt.js',
                        level: 2,
                    },
                ]}
            />
            <SkillLevelContent
                categoryName="Data/Others"
                skills={[
                    
                    {
                        name: 'Numpy',
                        level: 4,
                    },
                    {
                        name: 'Scikit-learn',
                        level: 4,
                    },
                    {
                        name: 'PyTorch',
                        level: 4,
                    },
                    {
                        name: 'Matplotlib',
                        level: 3,
                    },
                    {
                        name: 'Unity',
                        level: 3,
                    },
                    {
                        name: 'Git',
                        level: 3,
                    },
                    {
                        name: 'Tableau',
                        level: 1,
                    },
                    
                    
                ]}
            />
        </div>
    )
}

export default SkillText