import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/Logo.png';
import { useMutation } from '@tanstack/react-query';
import instance from '../api/instance';
import Modal from '../components/Modal/Modal';

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

interface userInfo {
  username: string,
  password:string
}

function Login() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] =useState(false);

  const [LoginData, setLoginData] = useState<userInfo>({
    username:'',
    password:''
  });

  const [modalData, setModalData] = useState({ 
    isOpen: false, 
    title: "", 
    message: "",
    endpoint:"",
    btnContent: "",
    isButton: false,
});

  const handleLogin = () => {
    mutation.mutate(LoginData);
  };

  const handleLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    //joinData가 객체 형태이므로 저장도 객체 형태로 키와 값쌍으로 연결시켜서 저장해주어야 한다.
    const {name, value} = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name] : value,
    }));
      }

  const mutation = useMutation<{ access: string; refresh: string }, Error, userInfo>({
    mutationFn: async (LoginRequest: userInfo) => {
      const response = await instance
        .post<{ access: string; refresh: string; }>('/accounts/login/', LoginRequest);
      return response.data;
    },
    
    onMutate: () => {
      setModalData({
        isOpen: true,
        title: "처리 중",
        message: "로그인 요청을 처리하고 있습니다.",
        isButton: false,
        endpoint: '',
        btnContent: "",
      });
    },

    onSuccess: (response) => {

      setModalData({
        isOpen: true,
        title: "로그인 완료!",
        message: "홈메이트에 오신 것을 환영합니다. 🎉",
        isButton: true,
        endpoint:'/home',
        btnContent: "홈메이트 시작하기",
      });

    },
    onError: (error) => {
      setModalData({
        isOpen: true,
        title: "문제가 발생했습니다",
        message: "로그인 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요",
        isButton: true,
        endpoint:'/login',
        btnContent: "확인",
        }
  )},
  });

  return (
    <>
      <Modal
        isOpen={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        isButton={modalData.isButton}
        endpoint={modalData.endpoint}
        btnContent={modalData.btnContent}
        onClose={() => setIsModalOpen(false)}
      />
    <Background>
      <Container>
        <LogoContainer>
          <img src={LogoImg} alt="로고" />
        </LogoContainer>
        <Title>로그인</Title>
        <Input
          type="text"
          name='username'
          placeholder="아이디"
          value={LoginData.username}
          onChange={handleLoginInfo}
        />
        <Input
          type="password"
          name='password'
          placeholder="비밀번호"
          value={LoginData.password}
          onChange={handleLoginInfo}
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
    </>
  );
}

export default Login;
