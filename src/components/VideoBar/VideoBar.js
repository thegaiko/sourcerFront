import React, { useRef, useState, useEffect } from 'react';
import './VideoBar.css';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import first from './first.mp4';
import second from './second.mp4';
import third from './third.mp4';
import fourth from './fourth.mp4';
import five from './five.mp4';

function VideoBar({ videoSource }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [fade, setFade] = useState(false); // Управляем состоянием анимации

  const toggleMute = () => {
    if (videoRef.current) {
      const currentMutedState = videoRef.current.muted;
      videoRef.current.muted = !currentMutedState;
      setIsMuted(!currentMutedState);
    }
  };

  const videoMap = {
    'first.mp4': first,
    'second.mp4': second,
    'third.mp4': third,
    'fourth.mp4': fourth,
    'five.mp4': five,
  };

  useEffect(() => {
    setFade(true); // Включаем анимацию появления
    const timer = setTimeout(() => {
      setFade(false); // Ожидаем анимацию появления
      if (videoRef.current) {
        videoRef.current.load(); // Перезагружаем видео с новым источником
      }
    }, 800); // Плавная анимация длится 800 мс

    return () => clearTimeout(timer);
  }, [videoSource]); // Анимация запускается при изменении videoSource

  return (
    <div className="VideoBarSide">
      <div className="mainVideoBar">
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className={`video ${fade ? 'fade' : ''}`} // Класс для анимации появления/исчезновения
          >
            <source src={videoMap[videoSource]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute size={30} color="white" /> : <FaVolumeUp size={30} color="white" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoBar;
