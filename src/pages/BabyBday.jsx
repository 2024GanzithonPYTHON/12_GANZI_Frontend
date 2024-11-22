import {React, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css';
import styled from 'styled-components'
import { TabContainer } from '../components/Tab';
import { PageContainer } from '../components/ScreenSizing';
import { NextButton} from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { ko } from 'date-fns/locale';

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
const StyledDatePicker = styled(DatePicker)`
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0 10px 30px rgba(112,136,210,0.1);
  background-color: #fff;
  color: #200e13c7;
  cursor: pointer;
  width: 450px;
  height: auto;
  padding: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`
const Input = styled.input`
    margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0 10px 30px rgba(112,136,210,0.1);
  background-color: #fff;
  color: #200e13c7;
  cursor: pointer;
  width: 450px;
  height: auto;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 12px;
`
function BabyStatus() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate]= useState(new Date());

    const handleNext = () => {
        navigate('/babyrelation')
    }
  return (
    <PageContainer style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection :'column'}}>
        <PageName>회원가입</PageName>
        <TabContainer />
        <InputExplanation fontSize='20px' marginTop='40px'>아기 생일을 알려주세요</InputExplanation>
        <InputExplanation fontSize='13px' marginTop='15px'>※ 추후에 변경할 수 없습니다. </InputExplanation>
        <StyledDatePicker 
          locale={ko}
          dateFormat='yyyy-MM-dd'
          shouldCloseOnSelect
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          
          />
        <NextButton marginTop='18em' onClick={handleNext} disabled={''}>다음</NextButton>
    </PageContainer>
  )
}

export default BabyStatus;