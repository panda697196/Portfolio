import Image from "next/image";
import React from "react";

const Urltest = () => {
    return (
        <a href="https://music.163.com/#/artist?id=28420206" target="_blank" rel="noopener noreferrer">
            <Image
                src="/Mii.png"
                alt=""
                width={24}
                height={24}
            />
        </a>
    );
};

export default Urltest;