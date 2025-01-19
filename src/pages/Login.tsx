import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/Logo.png';

const Background = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #d2f8f8, #7bd1ff);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 24px;

  img {
    width: 100px;
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #7bd1ff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: #0066ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056d1;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  font-size: 14px;

  span {
    margin: 0 8px;
    color: #0066ff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupContainer = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #666;

  .signup-link {
    color: #0066ff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('로그인 시도:', { username, password });
  };

  return (
    <Background>
      <Container>
        <LogoContainer>
          <img src={LogoImg} alt="로고" />
        </LogoContainer>
        <Title>로그인</Title>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>로그인</Button>
        <LinkContainer>
          <span onClick={() => navigate('/find-id')}>아이디 찾기</span>
          <span>|</span>
          <span onClick={() => navigate('/find-password')}>비밀번호 찾기</span>
        </LinkContainer>
        <SignupContainer>
          계정이 없으신가요?{' '}
          <span className="signup-link" onClick={() => navigate('/join')}>
            회원가입
          </span>
        </SignupContainer>
      </Container>
    </Background>
  );
}

export default Login;
