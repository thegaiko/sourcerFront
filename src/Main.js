import './App.css';
import { useState } from 'react';
import SideBar from './components/Sidebar/SideBar';
import VideoBar from './components/VideoBar/VideoBar'; // Используем Content для видео
import ProjectsBar from './components/ProjectsBar/ProjectsBar';
import TeamBar from './components/TeamBar/TeamBar';
import TochBar from './components/TochBar/TochBar';

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoSource, setVideoSource] = useState('first.mp4'); // Начальное видео

  return (
    <div className="App">
      <SideBar setActiveIndex={setActiveIndex} setVideoSource={setVideoSource} />
      {activeIndex === 0 && <VideoBar videoSource={videoSource} />} {/* Показываем Content */}
      {activeIndex === 1 && <ProjectsBar />}
      {activeIndex === 2 && <TeamBar />}
      {activeIndex === 3 && <TochBar />}
    </div>
  );
}

export default Main;
