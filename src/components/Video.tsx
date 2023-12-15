'use client'

import { useState, useRef, useEffect } from "react"

function VideoPlayer({ isPlaying }: { isPlaying: boolean }) {
    const videoref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            /* @ts-expect-error Server Component */
            videoref.current.play();
        } else {
            /* @ts-expect-error Server Component */
            videoref.current.pause();
        }
    });

    return (
        <video ref={videoref} preload='auto' autoPlay={true} loop muted poster='/imgs/poster.png' aria-description="Video de fundo sem audio que mostra imagens de satelite da terra e planetas do sistema solar">
            <source src="/assets/website-video.webm" type="video/webm" />
            <source src="/assets/website-video.mp4" type="video/mp4" />
        </video>
    )
}

export function Video() {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <>
            <div className="container absolute top-0 left-0 text-center bg-top min-w-full min-h-screen bg-video">
                <VideoPlayer isPlaying={Boolean(isPlaying)} />
            </div>
            <div className="controls" >
                <span onClick={() => setIsPlaying(!isPlaying)} onKeyDown={() => setIsPlaying(!isPlaying)} aria-description="Controles do video de fundo, aperte enter ou clique para pausar ou rodar o video.">
                    {isPlaying ?
                        <span className="opacity-75 hover:opacity-50 cursor-pointer w-16 h-16 inline-block" title="Pausar video de fundo" tabIndex={7}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-full h-full">
                                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                            </svg>
                        </span>
                        :
                        <span className="opacity-75 hover:opacity-50 cursor-pointer w-16 h-16 inline-block" title="Rodar video de fundo" tabIndex={7}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-full h-full">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </span>}
                </span>
            </div>
        </>
    )
}