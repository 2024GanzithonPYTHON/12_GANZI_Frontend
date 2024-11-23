// Join.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../styles/Join.css';

function Join() {
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  return (
    <div className="join-container">
      <div className="header">
        <div className="back-button" onClick={() => navigate(-1)}></div>
        <h2 className="join-title">회원가입</h2>
      </div>
      
      <div className="content-container">
        <img src={Logo} alt="로고" className="logo-image" />
        <h2 className="slogan">가정을 위한 공동 소비 플랫폼</h2>
        <input
          type="text"
          placeholder="닉네임"
          className="input-style"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="username-container">
          <input
            type="text"
            placeholder="아이디"
            className="input-style username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="check-button">중복확인</button>
        </div>
        <input
          type="password"
          placeholder="비밀번호"
          className="input-style"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="input-style"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className="next-button" onClick={() => navigate('/join2')}>다음</button>
      </div>
    </div>
  );
}

export default Join;