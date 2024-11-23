import {React, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css';
import styled from 'styled-components'
import { TabContainer } from '../components/Tab';
import { PageContainer } from '../components/ScreenSizing';
import { NextButton} from '../components/Input';
import { ko } from 'date-fns/locale';
import useIsMobile from '../hooks/LoginUi';
import { useNavigate } from 'react-router-dom';
import '../styles/BabyBday.css';

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
    const isMobile = useIsMobile();
    const [selectedDate, setSelectedDate]= useState(new Date());
      const [birthDate, setBirthDate] = useState('');
  const [isValid, setIsValid] = useState(true);


    const handleNextBtn = () => {
        navigate('/babyrelation')
    }

    const handleBirthDateChange = (e) => {
          const value = e.target.value;
          setBirthDate(value);
      
          // 정규식을 사용해서 날짜 형식 유효성 검사 (YYYY-MM-DD)
          const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
          setIsValid(regex.test(value));
        };
      
        const handleNext = () => {
          if (isValid && birthDate) {
            console.log('Birth Date:', birthDate);
            navigate('/join4'); // 다음 페이지로 이동
          } else {
            alert('올바른 생년월일을 입력해주세요 (YYYY-MM-DD).');
          }
        };


    if(!isMobile) {
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
            <NextButton marginTop='18em' onClick={handleNextBtn} disabled={''}>다음</NextButton>
        </PageContainer>
      )
    }


return (
  <div className="join3-container">
     <div className="header">
     <div className="back-button" onClick={() => navigate(-1)}></div>
     <h2 className="join3-title">회원가입</h2>
     </div>
     <h3 className="join3-subtitle">생년월일을 입력해주세요</h3>
     <div className="datepicker-container">
       <img className="calendar-logo" />
       <input
            type="text"
            className={`date-input ${!isValid ? 'invalid' : ''}`}
            placeholder="YYYY-MM-DD"
            value={birthDate}
            onChange={handleBirthDateChange}
          />
        </div>
        <button className="next-button" onClick={handleNext} disabled={!isValid || !birthDate}>
          다음
        </button>
      </div>
)
}



export default BabyStatus;