import React from 'react';

interface SkillLevelProps {
    skillName: string;
    level: number;
    maxLevel?: number;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ skillName, level, maxLevel = 5 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < maxLevel; i++) {
            stars.push(
                <span
                    key={`star_${skillName}_${i}`}
                    className={i < level ? 'text-emerald-1' : 'text-dark-gray-3'}
                >
          &#9733; {/* Unicode character for star */}
        </span>
            );
        }
        return stars;
    };

    return <p className="text-xl">{renderStars()}</p>;
};

export default SkillLevel;
