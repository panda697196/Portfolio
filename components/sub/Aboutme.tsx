"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import { DotGothic16,Press_Start_2P } from "next/font/google"

const DotGothic = DotGothic16({
    weight: "400",
    subsets: ["latin"],
});


const Aboutme = () => {
    return (
        <div>
            <div className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>

                <motion.div
                    variants={slideInFromRight(0.5)}
                    className='cursive text-gray-200 mb-1 mt-[10px] text-center text-6xl'
                >
                    About Me
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
            >

                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex justify-center items-center rounded-full overflow-hidden"
                >
                    <Image
                        src="/IMG5390.jpg"
                        alt="My picture"
                        height={400}
                        width={400}
                        className="rounded-full"
                    />
                </motion.div>
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[17px] border border-[#7042f88b] opacity-[0.9]"
                    >

                        <h1 className={`${DotGothic.className} Welcome-text text-[24px]`}>
                            滕 宇軒 / Teng Yuxuan
                        </h1>
                    </motion.div>


                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-2xl text-gray-400 my-5 max-w-[500px]"
                    >
                        中国吉林省長春市出身の大学院生です。<br/>
                        HCI系の研究室で動作特徴抽出に関する研究を行っています。<br/>
                        昔はデータ分析、web開発、運営管理など、様々な仕事をしました。<br/>
                        最近、モーションキャプチャーデータと苦戦しています...<br/>
                        趣味：<br/>
                        音楽鑑賞🎵、歌🎤、クラシックギター、料理🍳等<br/>


                    </motion.p>

                </div>
            </motion.div>
            <div className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>

                <motion.div
                    variants={slideInFromRight(0.5)}
                    className='cursive text-gray-200 mb-1 mt-[10px] text-center text-6xl'
                >
                    Education/Experience
                </motion.div>
            </div>
        </div>
    )
}

export default Aboutme