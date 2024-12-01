import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main'
import AquaWavePage from './pages/AquaWavePage';
import DeepBluePage from './pages/DeepBluePage.js';
import UltraDeepPage from './pages/UltraDeepPage';
import OceanicDreamPage from './pages/OceanicDreamPage';
import Grisha from './pages/Grisha'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Grisha" element={<Grisha />} />
        <Route path="/aqua-wave-motion" element={<AquaWavePage />} />
        <Route path="/deep-blue-horizon" element={<DeepBluePage />} />
        <Route path="/ultra-deep" element={<UltraDeepPage />} />
        <Route path="/oceanic-dreamscapes" element={<OceanicDreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
