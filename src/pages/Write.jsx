import React from 'react'
import styled from 'styled-components'
import { TabContainer } from '../components/Tab'
import { PageContainer } from '../components/ScreenSizing'
import Alarm from '../components/Alarm'
import { JoinInputContainer} from '../components/Input';
import { ImageIcon } from '../assets/icons/icons'

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const CommunityName = styled.div`
  width: 100%;
  height: auto;
  font-size: 16px;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`
const CompleteBtn = styled.button`
  width: 10%;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;

  &:hover {
      color : #3373BA;
  }
`
const WritingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
    width: 80%;
    height: auto;
    color: #7C7C7C;
    font-weight: ${(props) => props.fontWeight};
    font-size: 14px;
    margin: ${(props) => props.margin};
`
const CircleWrapper = styled.div`
  width: 80%;
  height: 100px;
`
const CircleContainer = styled.div`
    width: 8%;
    height: 50px;
    margin-bottom: 10px;
`
const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #F4F8FB;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(112,136,210, 0.2);

    &:hover {
        background-color: #C8E8FF;
    };
`
const CategotyContainer =  styled.div`
  width: 80%;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`
const CategoryBtn = styled.button`
  width: 10%;
  height: 26px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin-right: 10px;

  &:hover {
      background-color: #EBEBEB;
      transition: background-color 0.3s ease;
    }
`
function Write() {
  return (
    <PageContainer style={{display:'flex' , justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Header>
      <CommunityName> 글쓰기</CommunityName>
      <CompleteBtn>완료</CompleteBtn>
      </Header>
      <TabContainer/>
      <Alarm type='공지' title='공동구매 글쓰기 가이드'/>
      <WritingContainer>
        <Text margin="0px 0px 10px 0px">카테고리</Text>
        <CategotyContainer>
          <CategoryBtn>공동구매</CategoryBtn>
          <CategoryBtn>게시글</CategoryBtn>

        </CategotyContainer>
        <Text margin="0px 0px 10px 0px">제목</Text>
        <JoinInputContainer placeholder='내용을 입력해주세요'/>
        <Text>내용</Text>
        <JoinInputContainer borderBottom ='none' height="400px" placeholder='내용을 입력해주세요'/>
        <CircleWrapper>
          <CircleContainer>
            <Circle>
              <ImageIcon></ImageIcon>
            </Circle>
          </CircleContainer>
        </CircleWrapper>

        </WritingContainer>
    </PageContainer>


  )
}

export default Write