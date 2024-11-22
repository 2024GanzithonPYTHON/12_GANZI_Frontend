// Join2.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join2.css';

function Join2() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      console.log('Selected:', selectedOption);
      navigate('/join3'); // Join3 페이지로 이동하는 로직, 다음 페이지 추가 필요
    } else {
      alert('옵션을 선택해주세요.');
    }
  };

  return (
    <div className="join2-container">
      <div className="header">
      <div className="back-button" onClick={() => navigate(-1)}></div>
      <h2 className="join2-title">회원가입</h2>
      </div>
      <h3 className="join2-subtitle">만나서 반가워요!<br />현재 상태를 알려주세요</h3>
      <p className="join2-description">선택한 상태에 맞춰 “*”를 이용할 수 있어요.</p>
      <div className="options-container">
        <button className={`option-button ${selectedOption === '아이를 키울 예정이에요' ? 'selected' : ''}`} onClick={() => handleOptionClick('아이를 키울 예정이에요')}>
          아이를 키울 예정이에요
        </button>
        <button className={`option-button ${selectedOption === '아이를 키우고 있어요' ? 'selected' : ''}`} onClick={() => handleOptionClick('아이를 키우고 있어요')}>
          아이를 키우고 있어요
        </button>
        <button className={`option-button ${selectedOption === '기타' ? 'selected' : ''}`} onClick={() => handleOptionClick('기타')}>
          기타
        </button>
      </div>
      <button className="next-button" onClick={handleNext}>다음</button>
    </div>
  );
}

export default Join2;