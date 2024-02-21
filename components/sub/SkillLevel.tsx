import React from 'react';
import { DotGothic16,Press_Start_2P } from "next/font/google"


const PressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
});

const SkillLevelText = (props: {
    skillName: string;
    level: number;
    maxLevel?: number;
}) => {

    const maxStars = props.maxLevel ?? 5;
    return (
        <p className="text-xl">
            {Array(maxStars).fill(null).map((_, i) =>
                    i < props.level ? (
                        <span
                            key={`skill_text_${props.skillName}_${i}`}
                            className="text-emerald-1"
                        >
            &#9733;
          </span>
                    ) : (
                        <span
                            key={`skill_text_${props.skillName}_${i}`}
                            className="text-dark-gray-3"
                        >
            &#9734;
          </span>
                    )
            )}
        </p>
    );
};

const SkillLevelContent = (props: {
    categoryName: string;
    skills: {
        name: string;
        level: number;
        maxLevel?: number;
    }[];
}) => {
    return (
        <>
            <h4
                className={`relative text-2xl text-center ${PressStart2P.className} text-white`}
            >
                {props.categoryName}
            </h4>
            <ul className="relative max-w-[250px] mx-auto mb-10">
                {props.skills.map((v) => {
                    return (
                        <li
                            key={`about_skills_${props.categoryName}_${v.name}`}
                            className="flex gap-[2rem] justify-between w-full text-white"
                        >
                            <p>{v.name}</p>
                            <SkillLevelText
                                skillName={v.name}
                                level={v.level}
                                maxLevel={v.maxLevel}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default SkillLevelContent;
