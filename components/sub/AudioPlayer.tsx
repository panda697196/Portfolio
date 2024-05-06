"use client";
import { useState } from 'react';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement | null;
        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause();
            } else {
                audioPlayer.play();
            }
        }
    };

    return (
        <div>
            <audio id="audioPlayer" src="/Leave your youth here.mp3" loop></audio>
            <button onClick={togglePlay} style={{ width: '30px', height: '30px', padding: '0', background: 'none', border: 'none' }}>
                {isPlaying ? <img src="/pause-circle.svg" alt="Pause" /> : <img src="/play.svg" alt="Play" />}
            </button>
            <style jsx>{`
                button img {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
}

