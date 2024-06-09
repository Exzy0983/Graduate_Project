import React from 'react';
import { Link } from 'react-router-dom';
import aiImage from '../assets/ai-pixel-image.png'; // AI 관련 픽셀 이미지 경로

function Home() {
  return (
    <div>
      <h1 className="title">Welcome to the Tutorial Platform</h1>
      <img src={aiImage} alt="AI Pixel Art" className="ai-image" />
      <p className="description">Learn coding step by step with our tutorials.</p>
      <Link to="/course/1">
        <button className="btn">Start Tutorial</button>
      </Link>
    </div>
  );
}

export default Home;
