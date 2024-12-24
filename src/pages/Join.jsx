import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/ScreenSizing';
import { BackIcon } from '../assets/icons/icons'
import Logo from '../assets/Logo.png';
import HouseLogo from '../assets/HouseLogo.png'
import { TabContainer } from '../components/Tab';
import theme from '../utils/theme/Theme';
import { JoinInputContainer} from '../components/Input';
import { NextButton } from '../components/Button';

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

function Join() {
  return (
    <PageContainer >
      <Header>
        <BackIcon />
        <PageName>회원가입</PageName>
      </Header>
      <TabContainer marginTop='20px' />
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

      <JoinInputContainer height="20px" placeholder='아이디'/>
      <JoinInputContainer placeholder='비밀번호'/>
      <JoinInputContainer placeholder='비밀번호 확인'/>
      <JoinInputContainer placeholder='닉네임'/>
      <NextButton>다음</NextButton>
      {/* 
      <Input></Input> */}
    </PageContainer>
  );
}

export default Join;