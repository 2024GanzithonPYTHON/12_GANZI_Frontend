  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import Logo from '../assets/logo.png';
  import './Login.css';

  function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
      <div className="main-container">
        <div className="wave-container">
          <div className="back-button" onClick={() => navigate(-1)}></div>
          <h2 className="login-title">로그인</h2>
          <input
            type="text"
            placeholder="아이디"
            className="input-style"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-style password-input-style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={() => console.log('로그인 시도:', { username, password })}>
            로그인
          </button>
          <div className="link-container">
            <span className="link-text" onClick={() => navigate('/find-id')}>아이디 찾기</span>
            <div className="link-divider"></div>
            <span className="link-text" onClick={() => navigate('/find-password')}>비밀번호 찾기</span>
          </div>
          <div className="signup-container">
            <span className="signup-text">계정이 없으신가요?</span>
            <span className="signup-link" onClick={() => navigate('/join')}>회원가입</span>
          </div>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="로고" className="logo-image" />
          <h2 className="slogan-text">슬로건</h2>
        </div>
      </div>
    );
  }

  export default Login;
