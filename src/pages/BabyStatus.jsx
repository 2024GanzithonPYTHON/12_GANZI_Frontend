import React from 'react'
import styled from 'styled-components'
import { TabContainer } from '../components/Tab';
import { PageContainer } from '../components/ScreenSizing';
import { BabyInfoInput , NextButton} from '../components/Input';
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
export const InputExplanation = styled.div`
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
        navigate('/babybday')
    }
  return (
    <PageContainer style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection :'column'}}>
        <PageName>회원가입</PageName>
        <TabContainer />
        <InputExplanation fontSize='20px' marginTop='40px'>만나서 반가워요!</InputExplanation>
        <InputExplanation fontSize='20px'>현재 상태를 알려주세요</InputExplanation>
        <InputExplanation fontSize='13px' marginTop='30px'>선택한 상태에 맞춰 홈메이트를 이용할 수 있어요</InputExplanation>
        <BabyInfoInput marginTop='30px'>아이를 키울 예정이에요</BabyInfoInput>
        <BabyInfoInput>아이를 키우고 있어요</BabyInfoInput>
        <BabyInfoInput>기타</BabyInfoInput>
        <NextButton marginTop='10em' onClick={handleNext}>다음</NextButton>
    </PageContainer>
  )
}

export default BabyStatus