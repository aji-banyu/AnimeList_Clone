"use client"

import { XSquare } from '@phosphor-icons/react'
import React from 'react'
import YouTube from 'react-youtube'
import { useState } from 'react'

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: '300',
        height: '250'
    }

    const Player = () => {
        return (
            <div className='fixed bottom-0 right-0'>
            <button 
                onClick={handleCloseButton}
                className='text-color-primary float-right bg-color-dark'
            >
                <XSquare size={32} />
            </button>
            <YouTube 
                videoId={youtubeId} 
                onReady={(e) => e.target.pauseVideo()}
                opts={option} 
                onError={() => alert("Video is broken, please try another!")}
            />
        </div>
        )
    }

    const AppearVideo = () => {
        const handleAppearVideo = () => {
            setIsOpen((prevState) => !prevState)
        }
        return (
            <button onClick={handleAppearVideo} className='fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark'>Tonton trailer</button>
        )
    }

    return isOpen ? <Player/> : <AppearVideo/>
}

export default VideoPlayer