import React from 'react'
import styled from 'styled-components'
import { TabBar } from '../../components/Tab';
import { PageContainer } from '../../components/ScreenSizing';
import { BabyInfoInput} from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { NextButton } from '../../components/Button';
import { CommonProps } from '../../styles/CommonProps';

const PageName = styled.div`
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
export const InputExplanation = styled.div<CommonProps>`
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
function BabyStatus() {
    const navigate = useNavigate() ;

    const handleNext = () => {
        navigate('/babyname')
    }
  return (
    <PageContainer style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection :'column'}}>
        <PageName>회원가입</PageName>
        <TabBar />
        <InputExplanation fontSize='20px' marginTop='40px'>아이와의 관계는요?</InputExplanation>
        <InputExplanation fontSize='13px' marginTop='30px'>※ 추후에 변경할 수 없습니다. </InputExplanation>
        <BabyInfoInput marginTop='30px'>엄마예요 👩🏻</BabyInfoInput>
        <BabyInfoInput>아빠예요 👨🏻</BabyInfoInput>
        <BabyInfoInput>기타 👨‍👩‍👧‍👧</BabyInfoInput>
        <NextButton onClick={handleNext}>다음</NextButton>
    </PageContainer>
  )
}

export default BabyStatus;