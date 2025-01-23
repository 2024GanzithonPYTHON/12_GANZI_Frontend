//공동 구매 글에 입력하는 이메일 데이터
import styled from 'styled-components'
import Alarm from '../../../components/Alarm'
import {makeCenterColumn} from '../../../styles/mixins'
import { CommonProps } from '../../../styles/CommonProps'
import { useState } from 'react'

const InputContainer = styled.div`
  ${makeCenterColumn}
  width: 100%;
  height: 100px;
`
const InputType = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`
const InputContent = styled.textarea<CommonProps>`
  width: 100%;
  height: ${(props) => props.height || '30px'};
  border-radius: 6px;
  border: ${({theme})=> theme.colors.inputContainerColor};
  padding-left: 7px;
  resize: none;
  font-family: "Pretendard-Regular" !important;
  word-break: keep-all;

  &::placeholder {
  color: ${({theme})=> theme.colors.placeHolderColor};
  font-size: 13px;
  padding: 6px 0px;
}
`
interface Email {
  subject: string;
  body: string;
  payment_period: string;
  bank_name: string;
  account_number: string;
  contact_info: string;
}

function EmailContent() {
    const [emailData, setEmailData] = useState<Email>( {
      subject: "",
      body:"",
      payment_period: "",
      bank_name: "",
      account_number: "",
      contact_info: ""
    })

      const handleEmailData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        //joinData가 객체 형태이므로 저장도 객체 형태로 키와 값쌍으로 연결시켜서 저장해주어야 한다.
        const {name, value} = e.target;
    
        setEmailData((prev) => ({
          ...prev,
          [name] : value,
        }));
          }
  return (
    <>
        <Alarm type='안내' title='아래는 공동 구매가 성공적으로 진행될 때, 소비자에게 소식을 알리는 이메일 내용 입력칸입니다.'></Alarm>

        <InputContainer>
          <InputType>이메일 제목</InputType>
          <InputContent placeholder='제목' />
        </InputContainer>

        <InputContainer>
          <InputType>입금받으실 은행</InputType>
          <InputContent placeholder='은행명' />
        </InputContainer>

        <InputContainer>
          <InputType>결제 마감 날짜</InputType>
          <InputContent placeholder='YYYY-MM-DD까지' />
        </InputContainer>

        <InputContainer>
          <InputType>계좌번호</InputType>
          <InputContent 
            placeholder='숫자만 입력해주세요'/>
        </InputContainer>

        <InputContainer>
          <InputType>문의 받으실 이메일</InputType>
          <InputContent 
            placeholder='이메일'/>
        </InputContainer>

        <InputContainer>
          <InputType>이메일 내용</InputType>
          <InputContent placeholder='결제 및 배송과 관련된 내용을 입력해주세요' height='500px' />
        </InputContainer>

    </>
  )
}

export default EmailContent;