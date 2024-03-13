"use client"
import React, { useState } from 'react'
import Modal from 'react-modal'
import IndexCarouselcar from "@/components/sub/carousel/CarouselcarTools";
import Carousel from "@/components/sub/carousel";

const ModalTakajyou = () => {
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
            width: '70%',
            height: '70%',
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

                        <div className="relative p-4 ">
                            <h1 className="text-2xl font-semibold text-white">IVRC2023 SEED STAGE ハラショーな鷹匠</h1>
                            <p className="mt-2 text-gray-300">新型車の適正価格を調査するため、価格受容性調査を行うツール</p>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <button className="absolute top-0 right-0 m-2 px-2 py-1 rounded-md bg-gray-700 text-white"
                        onClick={closeModal}>
                    <img src="/windowsclose.svg" alt="Close" />
                </button>
            </Modal>
        </div>
    )
}
export default ModalTakajyou