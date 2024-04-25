import { useState, useRef } from 'react'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function AboutVideo () {
  const [isPlaying, setIsPlaying] = useState(true)
  const [showButton, setShowButton] = useState(false)
  const videoRef = useRef(null)
  let hideButtonTimer = null

  const handleVideoEnd = () => {
    setIsPlaying(false)
    handleMouseMove()
  }

  const handleMouseMove = () => {
    setShowButton(true)
    if (hideButtonTimer) {
      clearTimeout(hideButtonTimer)
    }

    hideButtonTimer = setTimeout(() => {
      setShowButton(false)
    }, 2000) // Button disappears after 2 seconds
  }

  const togglePlay = () => {
    const video = videoRef.current

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <section className='aboutVideo_container__L0l1A'>
      <div className='aboutVideo_content__PnTTU'>
        {showButton && (
          <div className='aboutVideo_videoIcon__RiFSD' onClick={togglePlay}>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              {isPlaying ? (
                <img
                  alt=''
                  draggable='false'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/pause-icon.svg?tr=w-120,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/pause-icon.svg?tr=w-120,q-100 2x'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/pause-icon.svg?tr=w-120,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={ImageDivSpanImgStyle3}
                  data-xblocker='passed'
                />
              ) : (
                <img
                  alt=''
                  draggable='false'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/play-icon.svg?tr=w-120,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/play-icon.svg?tr=w-120,q-100 2x'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/play-icon.svg?tr=w-120,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={ImageDivSpanImgStyle3}
                />
              )}
            </span>
          </div>
        )}
        <video
          ref={videoRef}
          poster='/image/solicy_video.webp'
          autoPlay
          playsInline
          preload='auto'
          className='aboutVideo_video__4LwDU'
          data-xblocker='passed'
          style={{ visibility: 'visible' }}
          onMouseMove={handleMouseMove}
          onEnded={handleVideoEnd}
        >
          <source src='https://ik.imagekit.io/2zlgs27bjo/public/about-video.mp4' />
          <track kind='captions' />
        </video>
      </div>
    </section>
  )
}

export default AboutVideo
