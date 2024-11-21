import React from 'react'
import { PageContainer } from '../components/ScreenSizing';
import LogoImg from '../assets/Logo.png'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogoContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 10em;
`
const Title = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: ${({theme} )=> theme.colors.mainColor};
`
const StartBtn = styled.button`
  width: 50%;
  height: 67px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content:  center;
  background-color: transparent;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <PageContainer>
      <div style={{display :'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <LogoContainer>
          <img src={LogoImg} alt="Logo" width='150px'/>
        </LogoContainer>
        <Title>가정을 위한</Title>
        <Title>공동 소비 플랫폼</Title>
        <StartBtn onClick={handleClick}>시작하기</StartBtn>

      </div>
    </PageContainer>
  )
}
export default Home;