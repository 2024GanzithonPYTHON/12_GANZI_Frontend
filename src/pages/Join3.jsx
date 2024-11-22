// Join3.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join3.css';

function Join3() {
  const [birthDate, setBirthDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleBirthDateChange = (e) => {
    const value = e.target.value;
    setBirthDate(value);

    // 정규식을 사용해서 날짜 형식 유효성 검사 (YYYY-MM-DD)
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    setIsValid(regex.test(value));
  };

  const handleNext = () => {
    if (isValid && birthDate) {
      console.log('Birth Date:', birthDate);
      navigate('/join4'); // 다음 페이지로 이동
    } else {
      alert('올바른 생년월일을 입력해주세요 (YYYY-MM-DD).');
    }
  };

  return (
    <div className="join3-container">
      <div className="header">
      <div className="back-button" onClick={() => navigate(-1)}></div>
      <h2 className="join3-title">회원가입</h2>
      </div>
      <h3 className="join3-subtitle">생년월일을 입력해주세요</h3>
      <div className="datepicker-container">
        <img className="calendar-logo" />
        <input
          type="text"
          className={`date-input ${!isValid ? 'invalid' : ''}`}
          placeholder="YYYY-MM-DD"
          value={birthDate}
          onChange={handleBirthDateChange}
        />
      </div>
      <button className="next-button" onClick={handleNext} disabled={!isValid || !birthDate}>
        다음
      </button>
    </div>
  );
}

export default Join3;
