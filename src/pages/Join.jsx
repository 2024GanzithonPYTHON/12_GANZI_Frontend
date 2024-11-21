import React from 'react'
import { PageContainer } from '../components/ScreenSizing';
import { JoinInputContainer , NextButton} from '../components/Input';
import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';
import { TabContainer } from '../components/Tab';


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
const CommunityName = styled.div`
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const LogoContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`

function Join() {
  return (
    <PageContainer >
      <CommunityName>회원가입</CommunityName>
      <TabContainer />
      <LogoContainer>
          <img src={LogoImg} alt="Logo" width='150px'/>
        </LogoContainer>
        <Title>가정을 위한</Title>
        <Title style={{marginBottom:'60px'}}>공동 소비 플랫폼</Title>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection :'column'}}>
          <JoinInputContainer placeholder='닉네임'></JoinInputContainer>
          <JoinInputContainer placeholder='아이디'></JoinInputContainer>
          <JoinInputContainer placeholder='비밀번호'></JoinInputContainer>
          <JoinInputContainer placeholder='비밀번호 확인'></JoinInputContainer>
          <NextButton>다음</NextButton>
        </div>
    </PageContainer>
  )
}
export default Join;