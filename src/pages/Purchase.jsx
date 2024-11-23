import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/ScreenSizing';
import Tab from '../components/Tab';
import Alarm from '../components/Alarm';
import Post from '../components/Post';
import Footer from '../components/Footer';
import WriteImg from '../assets/WriteImg.png';

const CommunityName = styled.div`
  width: 100%;
  height: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageWrapper = styled.div`
  min-height: 100vh; /* 페이지가 최소 브라우저 높이만큼 차지 */
  display: flex;
  flex-direction: column;
  position: relative; /* Footer의 위치 기준 */
  padding-bottom: 60px; /* Footer 높이만큼 여백 추가 */
`;

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
function Purchase() {
  return (
    <PageWrapper>
        <PageContainer>
            <CommunityName>공동구매</CommunityName>
            <Tab />
            <Alarm type='안내' title='커뮤니티 이용 가이드'/>
            <Alarm type='공지' title='개인정보 처리방침'/>
            <Post title='이런저런제목' content='이러이러한 내용' nickname='yunhae' time='2024.11.20'/>
            <WriteIcon src={WriteImg} alt="WriteImg"></WriteIcon>
        </PageContainer>
        <Footer></Footer>
    </PageWrapper>
  )
}

export default Purchase;