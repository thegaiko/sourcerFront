import React, { useState } from 'react';
import './ProjectsBar.css';
import { useNavigate } from 'react-router-dom';
import first from '../VideoBar/first.mp4';
import second from '../VideoBar/second.mp4';
import third from '../VideoBar/third.mp4';
import fourth from '../VideoBar/fourth.mp4';

function ProjectsBar() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const texts = [
    { id: 1, label: 'AquaWave Motion,', video: first, path: '/aqua-wave-motion' },
    { id: 2, label: 'Deep Blue Horizon,', video: second, path: '/deep-blue-horizon' },
    { id: 3, label: 'Ultra Deep,', video: third, path: '/ultra-deep' },
    { id: 4, label: 'Oceanic Dreamscapes', video: fourth, path: '/oceanic-dreamscapes' },
  ];

  const handleMouseEnter = (video, textId) => {
    setActiveVideo(video);
    setHoveredText(textId);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setHoveredText(null);
    setTimeout(() => setActiveVideo(null), 300); // Delay to allow fade-out animation
  };

  const handleTextClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="projectsSide">
      <div className="headText">Projects</div>
      <div className="projects">
        <div className="textBox">
          <div className="row">
            {texts.slice(0, 2).map((text) => (
              <div
                key={text.id}
                className={`projectText ${
                  hoveredText !== null && hoveredText !== text.id ? 'hidden' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(text.video, text.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTextClick(text.path)} // Navigate on click
              >
                {text.label}
              </div>
            ))}
          </div>
          <div className="row">
            {texts.slice(2).map((text) => (
              <div
                key={text.id}
                className={`projectText ${
                  hoveredText !== null && hoveredText !== text.id ? 'hidden' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(text.video, text.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTextClick(text.path)} // Navigate on click
              >
                {text.label}
              </div>
            ))}
          </div>
        </div>

        {activeVideo && (
          <video
            className={`background-video ${isVisible ? 'fade-in' : 'fade-out'} ${
              hoveredText ? 'fullscreen' : ''
            }`}
            autoPlay
            loop
          >
            <source src={activeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default ProjectsBar;
