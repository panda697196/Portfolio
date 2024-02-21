"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import { DotGothic16,Press_Start_2P,Silkscreen} from "next/font/google"

const DotGothic = DotGothic16({
    weight: "400",
    subsets: ["latin"],
});
const silkscreen_regular = Silkscreen({
    weight: '400',
    subsets: ['latin'],
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
                        src="/IMG_5390.jpg"
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
            <div className="flex flex-col items-center justify-center px-20 mt-10 w-full z-[20]">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="rounded-lg p-8 text-gray-100 text-xl my-5 max-w-[1300px]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #808080, #1b0738)", // 自定义渐变色
                        backgroundSize: "100% 100%", // 使渐变色填满整个元素
                        backgroundColor: "rgba(0, 0, 0, 0.75)" // 背景色为半透明黑色
                    }}
                >

                    <ul className="DotGothic grid gap-[15px]">
                        経歴：<br/>
                        <li>
                            <span className={DotGothic.className}>2015.09-2019.06：</span>
                            <br/>
                            北京航空航天大学 計器科学と光通信学工程学院
                        </li>
                        <li>
                            <span className={DotGothic.className}>2019.07-2021.01：</span>
                            <br/>
                            一汽フォルクスワーゲン自動車株式会社
                        </li>
                        <li>
                            <span className={DotGothic.className}>2022.10-2023.03：</span>
                            <br/>
                            東北大学 学部研究生
                        </li>
                        <li>
                            <span className={DotGothic.className}>2023.04-現在</span>
                            <br/>
                            東北⼤学大学院 情報科学研究科
                        </li>
                        活動：<br/>
                        <ul className="outer-ul">
                            <li>
                                <span className={DotGothic.className}>2015.09-2019.06：</span>
                                <br/>
                                北航学生合唱団に所属<br/>
                                <ul className="inner-ul text-ml">
                                    <li>
                                        <span className={DotGothic.className}>2016.05，2018.06：</span>
                                        北京学生コンクール金賞2回獲得（2年に1回）
                                    </li>
                                    <li>
                                        <span className={DotGothic.className}>2018.04：</span>
                                        全国学生コンクール金賞獲得（3年に1回）
                                    </li>
                                    <li>
                                        <span className={DotGothic.className}>2018.10：</span>
                                        国際合唱コンクール金賞獲得
                                    </li>
                                </ul>
                            </li>
                        </ul>


                        <li>
                            <span className={DotGothic.className}>2015.09-2019.03：</span>
                            <br/>
                            北京市内ボランティア活動
                        </li>
                        <li>
                            <span className={DotGothic.className}>2023.09：</span>
                            <br/>
                            IVRC 2023 SEED STAGEに参加
                        </li>
                    </ul>
                </motion.div>
            </div>

        </div>
    )
}

export default Aboutme