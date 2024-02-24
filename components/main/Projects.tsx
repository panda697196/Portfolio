import React, { Component } from "react";
import ProjectCard from "../sub/ProjectCard";



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
                <ProjectCard
                    src="/VS7趣选配——1.webp"
                    title="ミニアプリ「事前予約ゲーム」"
                    description="新型車の適正価格を調査するため、価格受容性調査を行うツール"
                />
                <ProjectCard
                    src="/takajyou.png"
                    title="IVRC2023 SEED　STAGE　ハラショーな鷹匠"
                    description="実際の鷹匠体験を疑似体験できるコンテンツ「ハラショーな鷹匠」を提供する"
                />
                <ProjectCard
                    src="/breakout.png"
                    title="体感！！ワクワクブロックくずし"
                    description="研究室開放イベントでの体感型ゲーム"
                />
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/custominsighr1.png"
                    title="カスタマーインサイト"
                    description="ビッグデータを分析し，複数の車種の初期ターゲット顧客、リード、車オーナーに対するカスタマーインサイトを作成しました"
                />
                <ProjectCard
                    src="/takajyou.png"
                    title="IVRC2023 SEED　STAGE　ハラショーな鷹匠"
                    description="実際の鷹匠体験を疑似体験できるコンテンツ「ハラショーな鷹匠」を提供する"
                />
                <ProjectCard
                    src="/takajyou.png"
                    title="IVRC2023 SEED　STAGE　ハラショーな鷹匠"
                    description="実際の鷹匠体験を疑似体験できるコンテンツ「ハラショーな鷹匠」を提供する"
                />

            </div>

        </div>
    );
};

export default Projects;
