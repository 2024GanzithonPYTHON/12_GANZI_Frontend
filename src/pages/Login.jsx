import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/Logo.png';
import { LoginInputContainer } from '../components/Input';
import Logo from '../assets/Logo.png';
import '../styles/Login.css';
import useIsMobile from '../hooks/LoginUi';
import {LoginBgImg} from '../assets/icons/icons';

// 스타일 정의
const Background = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(#D2F8F8, #7BD1FF);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Title = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 24px;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const PageContainer = styled.div`
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 62%;
  height: 40px;
  border: 0.5px solid #E0E0E0;
  background-color: #000;
  margin: 10px 0px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  padding-left: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
    color: #000;
    transition: background-color 0.3s ease;
  }
`

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (!isMobile) {
    // 웹 버전
    return (
      <Background>
        <PageContainer>
          <LogoContainer>
            <img src={LogoImg} alt="Logo" width="150px" />
          </LogoContainer>
          <Title>로그인</Title>
          <LoginInputContainer placeholder="아이디" />
          <LoginInputContainer placeholder="비밀번호" />
          <Button>로그인</Button>
        </PageContainer>
      </Background>
    );
  }

  // 모바일 버전
  return (
    <div className= "login-main-container">
        <LoginBgImg />
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
        <button
          className="login-button"
          onClick={() => console.log('로그인 시도:', { username, password })}
        >
          로그인
        </button>
        <div className="link-container">
          <span className="link-text" onClick={() => navigate('/find-id')}>
            아이디 찾기
          </span>
          <div className="link-divider"></div>
          <span className="link-text" onClick={() => navigate('/find-password')}>
            비밀번호 찾기
          </span>
        </div>
        <div className="signup-container">
          <span className="signup-text">계정이 없으신가요?</span>
          <span className="signup-link" onClick={() => navigate('/join')}>
            회원가입
          </span>
        </div>

      <div className="logo-container">
        <img src={Logo} alt="로고" className="logo-image" />
        <h2 className="slogan-text">슬로건</h2>
      </div>
    </div>
  );
}

export default Login;
