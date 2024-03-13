import React, { Component } from "react";
import ProjectCard from "../sub/ProjectCard";
import IndexCarouselcar from "../sub/carousel/CarouselcarTools";
import IndexCarouseltaka from "@/components/sub/carousel/CarouselTakajyou";
import IndexCarouselbreak from "@/components/sub/carousel/Carouselbreakou";
import Image from "next/image";

import IndexCarouselinsight from "../sub/carousel/Carouselinsight";
import ModalTools from "@/components/sub/modal/modaltools";


const Projects = () => {
    return (

        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >

            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1 ">
                    <div className="flex justify-center">
                        <div className="w-full max-w-screen-xl overflow-hidden">
                            <IndexCarouselcar/>
                        </div>
                    </div>

                    <div className="relative p-4">
                        <h1 className="text-2xl font-semibold text-white">ミニアプリ「事前予約ゲーム」</h1>
                        <p className="mt-2 text-gray-300">新型車の適正価格を調査するため、価格受容性調査を行うツール</p>
                    </div>
                    

                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[400px] overflow-hidden">
                            <IndexCarouseltaka/>
                        </div>
                    </div>

                    <div className="relative p-4">
                        <h1 className="text-2xl font-semibold text-white">IVRC2023 SEED STAGE ハラショーな鷹匠</h1>
                        <p className="mt-2 text-gray-300">実際の鷹匠体験を疑似体験できるコンテンツ「ハラショーな鷹匠」を提供する</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[400px] overflow-hidden">
                            <IndexCarouselbreak/>
                        </div>
                    </div>

                    <div className="relative p-4">
                        <h1 className="text-2xl font-semibold text-white">体感！！ワクワクブロックくずし</h1>
                        <p className="mt-2 text-gray-300">研究室開放イベントでの体感型ゲーム</p>
                    </div>
                </div>
            </div>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

                <div
                    className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1 max-w-[600px]">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[600px] overflow-hidden">
                            <IndexCarouselinsight/>
                        </div>
                    </div>

                    <div className="relative p-4">
                        <h1 className="text-2xl font-semibold text-white">カスタマーインサイト</h1>
                        <p className="mt-2 text-gray-300">ビッグデータを分析し，複数の車種の初期ターゲット顧客、リード（見込み客）、車オーナーに対するカスタマーインサイトを作成しました</p>
                    </div>
                </div>
                <div
                    className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1 max-w-[600px]">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[600px] overflow-hidden">
                            <Image src={"/Unity2DGame1.png"} alt={""}
                                   width={600}
                                   height={200}
                                   layout="responsive"
                                   className="rounded-md cursor-pointer w-full h-full"
                                   sizes="100vw"

                                   style={{
                                       width: 'auto',
                                       height: 'auto',
                                   }}
                            />
                        </div>
                    </div>

                    <div className="relative p-4">
                        <h1 className="text-2xl font-semibold text-white">Unity2DPlatformゲーム</h1>
                        <p className="mt-2 text-gray-300">Unityエンジンで制作された2Dアクションアドベンチャーゲーム</p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Projects;
