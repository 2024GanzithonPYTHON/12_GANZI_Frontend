import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // 로고 이미지 파일 경로
import '../styles/StartPage.css'; // CSS 파일 분리

// 시작 페이지 컴포넌트
function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <img src={Logo} alt="로고" className="logo-image" />
      <h2 className="title">가정을 위한 공동 소비 플랫폼</h2>
      <button className="start-button" onClick={() => navigate('/login')}>
        시작하기
      </button>
      <button className="learn-more-button">알아보기</button>
    </div>
  );
}

export default StartPage;