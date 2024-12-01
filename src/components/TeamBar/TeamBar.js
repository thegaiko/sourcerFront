import React, { useState } from 'react';
import teamPhoto from './team.jpg';
import Grisha from './grish.png';
import Arman from './arman.png';
import Karen from './karen.png';
import './TeamBar.css';

const TeamBar = () => {
  // Данные о людях с координатами, именами, должностями и изображениями
  const faces = [
    { id: 1, name: 'Grisha Bespaly', position: 'CEO', x: 23, y: 31, image: Grisha },
    { id: 2, name: 'Karen Blondy', position: 'CPIDO', x: 34, y: 29, image: Karen },
    { id: 3, name: 'Arman Krasny', position: 'CIGARO', x: 43.7, y: 30, image: Arman },
  ];

  const [hoveredFace, setHoveredFace] = useState(null);

  // Обработчики событий для наведения мыши
  const handleMouseEnter = (face) => {
    setHoveredFace(face);
  };

  const handleMouseLeave = () => {
    setHoveredFace(null);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <img
        className={`teamPhoto ${hoveredFace ? 'blur' : ''}`}
        src={teamPhoto}
        alt="Group of people"
      />

      {faces.map((face) => (
        <div
          key={face.id}
          className={`point ${hoveredFace?.id === face.id ? 'point-hovered' : ''}`}
          style={{
            top: `${face.y}vh`,
            left: `${face.x}vw`,
            backgroundImage: hoveredFace?.id === face.id ? `url(${face.image})` : 'none', // Устанавливаем фоновое изображение только при наведении
          }}
          onMouseEnter={() => handleMouseEnter(face)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Точка, на которую наводим мышь */}
        </div>
      ))}

      {hoveredFace && (
        <div className='teamateContainer'>
          <div className='teamateName'>{hoveredFace.name}</div>
          <div className='teamatePosition'>{hoveredFace.position}</div>
        </div>
      )}
    </div>
  );
};

export default TeamBar;
