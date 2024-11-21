import React from 'react'
import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';
import { LoginInputContainer} from '../components/Input';

const Background = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(#D2F8F8, #7BD1FF);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  
`
const LogoContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`
const PageContainer = styled.div`
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex; 
  flex-direction: column;
`
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
  return (
    <Background>
      <PageContainer>
        <LogoContainer>
        <img src={LogoImg} alt="Logo" width='150px'/>
        </LogoContainer>
        <Title>로그인</Title>
        <LoginInputContainer placeholder='아이디'/>
        <LoginInputContainer placeholder='비밀번호'/>
        <Button>로그인</Button>
      </PageContainer>
    </Background>
  )
}
export default Login;