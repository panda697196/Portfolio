"use client"
import React, { useState } from 'react'
import Modal from 'react-modal'
import IndexCarouselcar from "@/components/sub/carousel/CarouselcarTools";
import Carousel from "@/components/sub/carousel";

const ModalTools = () => {
    const [isOpen, setIsOpen] = useState(false)
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            zIndex: 100,
            backgroundColor: 'rgb(73,64,64)',

        }
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button
                className="text-sm font-semibold text-gray-50 bg-purple-800 hover:bg-purple-950 px-3 py-1.5 rounded-md"
                onClick={() => setIsOpen(true)}
            >
                Learn More
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
                    <div className="relative overflow-y-auto rounded-lg shadow-lg border border-[#2A0E61] flex-1 backgroundColor: 'rgb(101,88,88)">
                        <div className="flex justify-center">
                            <div className="w-full max-w-screen-xl overflow-hidden">
                                <Carousel slides={["/官网轮播图2_副本.jpg","/VS7趣选配——1.webp","/VS7趣选配——2_副本.jpg","/VS7趣选配——3.webp"]}/>
                            </div>
                        </div>

                        <div className="relative p-5 ">
                            <h1 className="text-3xl font-semibold text-white">ミニアプリ「事前予約ゲーム」</h1>
                            <p className="mt-2 text-gray-300">新型車発売前の価格受容性調査用に開発されたWechatプラットフォームの「ミニプログラム」です</p>
                            <p className="text-gray-300">車の価格はユーザーによってラ
                                ンダムに変動しますので，客は自身の見込みに沿って調整します </p>
                            <p className="text-gray-300">顧客が受け入れやすい価格帯だけでなく，車の配置や色の好みについても調査を行いました </p>
                            <p className="text-gray-300">これは私にとって初めてのミニアプリ開発であり,当時はいくつかの自動車メディアがこのことについて報道しました</p>
                            <p className="text-gray-300">個人的にとしては、当初の目的は達成されたと考えています </p>

                            <a href="https://baijiahao.baidu.com/s?id=1651899780173516205&wfr=spider&for=pc"
                               target="_blank"
                               rel="noopener noreferrer"
                               style={{
                                   textDecoration: 'underline',
                                   color: 'lightgray',
                                   cursor: 'pointer'
                               }}>
                                当時のニュース（中国語サイト）
                            </a>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <button className="absolute top-0 right-0 m-2 px-2 py-1 rounded-md bg-gray-700 text-white"
                        onClick={closeModal}>
                    <img src="/windowsclose.svg" alt="Close"/>
                </button>
            </Modal>
        </div>
    )
}
export default ModalTools