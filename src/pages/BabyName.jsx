import React from 'react'
import styled from 'styled-components'
import { TabContainer } from '../components/Tab';
import { PageContainer } from '../components/ScreenSizing';
import { NextButton} from '../components/Input';
import { useNavigate } from 'react-router-dom';

const PageName = styled.div`
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const InputExplanation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #200e13c7;
    font-size: ${(props)=> props.fontSize};
    margin-top: ${(props) => props.marginTop};
    font-weight: bold;
`
function BabyName() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/userinfo')
}
  return (
    <PageContainer style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection :'column'}}>
    <PageName>회원가입</PageName>
    <TabContainer />
    <InputExplanation fontSize='20px' marginTop='40px'>아기의 이름을 알려주세요</InputExplanation>
    <InputExplanation fontSize='13px' marginTop='30px'>※ 추후에 변경할 수 없습니다. </InputExplanation>

    <NextButton marginTop='18em' onClick={handleNext}>다음</NextButton>
</PageContainer>
  )
}

export default BabyName