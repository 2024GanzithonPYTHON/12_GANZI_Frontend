import React from 'react'
import { PageContainer } from '../components/ScreenSizing';
import styled from 'styled-components';
import Alarm from '../components/Alarm';
import Post from '../components/Post';
import Footer from '../components/Footer';
import WriteImg from '../assets/WriteImg.png';
import { Header } from '../components/Header';

const WriteIcon = styled.img`
  width: 50px;
  position: absolute; 
  bottom: 80px; 
  right: 20px; 
  cursor: pointer;

  @media (max-width: 430px) {
  width: 40px;
  bottom: 80px;
  right: 15px;
}
`
function HotPost() {
  return (
    <>
    <PageContainer>
    <Header fontWeight="bold">
      인기글 게시판
      </Header>
        <Alarm type='안내' title='커뮤니티 이용 가이드'/>
        <Alarm type='공지' title='개인정보 처리방침'/>
        <Post title='제목' content='이러이러한 내용' nickname='yunhae' time='2024.11.20'/>
        <WriteIcon src={WriteImg} alt="WriteImg"></WriteIcon>
    </PageContainer>
    <Footer></Footer>
  </>
  )
}
export default HotPost;