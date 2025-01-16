import styled from 'styled-components'
import { TabBar } from '../components/Tab';
import { PageContainer } from '../components/ScreenSizing';
import { NextButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { CommonProps } from '../styles/CommonProps';

const PageName = styled.div` //conponent
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const InputExplanation = styled.div<CommonProps>`
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
const Input = styled.input`
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0 10px 30px rgba(112,136,210,0.1);
  background-color: transparent;
  color: #200e13c7;
  cursor: pointer;
  width: 60%;
  height: auto;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 12px;
  background-image: url('../assets/icons/icons/DeliveryIcon') no-repeat;
  background-size: 16px;

  /* &::placeholder {
    color: #B6B6B6;
  } */

  
`
function BabyStatus() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/home')
    }
  return (
    <PageContainer>
        <PageName>회원가입</PageName>
        <TabBar />
        <InputExplanation fontSize='20px' marginTop='40px'> 배송지와 이메일을 알려주세요</InputExplanation>
        <InputExplanation fontSize='13px' marginTop='15px'>※ 추후에 변경할 수 없습니다. </InputExplanation>
        <Input placeholder='📦 배송지를 입력해주세요' className='input-with-svg'></Input>
        <Input placeholder='📧 이메일을 입력해주세요'>
        </Input>
        <NextButton marginTop='11em' onClick={handleNext}>시작하기</NextButton>
    </PageContainer>
  )
}

export default BabyStatus;