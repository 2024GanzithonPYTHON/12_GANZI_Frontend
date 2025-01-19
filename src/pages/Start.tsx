import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/Logo.png'; // 로고 이미지 파일 경로

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #d2f8f8, #7bd1ff);
  font-family: Arial, sans-serif;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StartButton = styled.button`
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056d1;
  }
`;

const LearnMoreButton = styled(StartButton)`
  background: transparent;
  color: #0066ff;
  border: 2px solid #0066ff;

  &:hover {
    background: #0066ff;
    color: white;
  }
`;

function StartPage() {
  const navigate = useNavigate();

  return (
    <Background>
      <LogoImage src={Logo} alt="로고" />
      <Title>가정을 위한 공동 소비 플랫폼</Title>
      <ButtonContainer>
        <StartButton onClick={() => navigate('/login')}>
          시작하기
        </StartButton>
        <LearnMoreButton>알아보기</LearnMoreButton>
      </ButtonContainer>
    </Background>
  );
}

export default StartPage;
