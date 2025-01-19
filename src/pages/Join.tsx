import React, {useState } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/ScreenSizing';
import { BackIcon } from '../assets/icons/icons'
import Logo from '../assets/Logo.png';
import HouseLogo from '../assets/HouseLogo.png'
import { TabBar } from '../components/Tab';
import theme from '../utils/theme/Theme';
import { JoinInputContainer} from '../components/Input';
import { NextButton } from '../components/Button';
import {useMutation} from '@tanstack/react-query';
import instance from '../api/instance';
import Modal from '../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';


const Header = styled.div` //conponent
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
`
const PageName = styled.div` //conponent
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const IntroContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 20px;
`
const CatchPhraseContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CatchPhrase = styled.div`
  font-size: 22px;
  font-weight: bold;
  color:  ${(props) => props.color || "#B6B6B6"};
  width: 100%;
`
const LogoIcon = styled.img`
  width: 25%;
  height: 25%;
`
const HouseLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  height: 20%;
`
const HouseLogoIcon = styled.img`
    width: 20%;
    height: 20%;
`
interface SignUpData {
  username: string;
  password: string;
  password_confirm: string;
  nickname: string;
}

function Join() {
  const navigate = useNavigate();
  const [joinData, setJoinData] = useState<SignUpData>({
    username: '',
    password: '',
    password_confirm:'',
    nickname: '',
  });

  const [modalState, setModalState] = useState({ 
    isOpen: false, 
    title: "", 
    message: "",
    destination: false,
    endPoint: "",});

  
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: (data) => instance.post("/accounts/signup/", data),
    onMutate: () => {
      setModalState({
        isOpen: true,
        title: "처리 중",
        message: "회원가입 요청을 처리하고 있습니다.",
        destination: false,
        endPoint: ""
      });
    },
    onSuccess: () => {
      setModalState({
        isOpen: true,
        title: "회원가입 완료!",
        message: "홈메이트에 오신 것을 환영합니다. 🎉",
        destination: true,
        endPoint: '/'
      });
      
      navigate('/')
    },
    onError: (error) => {
      setModalState({
        isOpen: true,
        title: "문제가 발생했습니다",
        message: error.message || "회원가입 요청 중 오류가 발생했습니다.",
        destination: false,
        endPoint: ""
      });
    },
  });

  const handleInputInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    //joinData가 객체 형태이므로 저장도 객체 형태로 키와 값쌍으로 연결시켜서 저장해주어야 한다.
    const {name, value} = e.target;

    setJoinData((prev) => ({
      ...prev,
      [name] : value,
    }));
  }

  const handleSubmit = () => {
    mutation.mutate(joinData);
  };

    return (
    <>
    <Modal
        isOpen={modalState.isOpen}
        title={modalState.title}
        message={modalState.message}
        destination={modalState.destination}
        onClose={() => setModalState({ isOpen: false, title: "", message: "", destination: false, endPoint: ""})}
      />
    <PageContainer >
      <Header>
        <BackIcon />
        <PageName>회원가입</PageName>
      </Header>
      <TabBar marginTop='20px' />
      <IntroContainer>
        <CatchPhraseContainer>
          <CatchPhrase>
            가정을 위한
          </CatchPhrase>
          <CatchPhrase>
            공동소비 플랫폼
          </CatchPhrase>

          <HouseLogoContainer>
            <HouseLogoIcon src={HouseLogo} />
            <CatchPhrase color={theme.colors.mainColor}>
              홈메이트
            </CatchPhrase>
          </HouseLogoContainer>
        </CatchPhraseContainer>
        <LogoIcon src={Logo} />
      </IntroContainer>

      <JoinInputContainer height="20px" placeholder='아이디' value={joinData.username} name = 'username' onChange={handleInputInfo}/>
      <JoinInputContainer type= 'password' placeholder='비밀번호' value={joinData.password} name ='password' onChange={handleInputInfo}/>
      <JoinInputContainer type= 'password' placeholder='비밀번호 확인' value={joinData.password_confirm} name='password_confirm' onChange={handleInputInfo}/>
      <JoinInputContainer placeholder='닉네임' value={joinData.nickname} name='nickname' onChange={handleInputInfo}/>

      <NextButton onClick={handleSubmit}>완료</NextButton>
      {/* 
      <Input></Input> */}
    </PageContainer>
      
</>
    )
}


export default Join;