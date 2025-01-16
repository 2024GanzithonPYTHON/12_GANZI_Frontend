import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/ScreenSizing';
import { PlusIcon, BackIcon} from '../assets/icons/icons'
import Alarm from '../components/Alarm';
import Post from '../components/Post';
import Footer from '../components/Footer';
import { Header } from '../components/Header'
import { makeCenterColumn } from '../styles/mixins';

const CommunityName = styled.div`
  width: 100%;
  height: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WriteIcon = styled.div`
  ${makeCenterColumn}
  position: fixed; /* 화면에 고정 */
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 50px;
  height: 50px;
  cursor: pointer;
  bottom: 100px; /* 화면 아래에서의 거리 */
  right: 300px; /* 화면 오른쪽에서의 거리 */

  @media (max-width: 430px) {
  width: 40px;
  bottom: 80px;
  right: 15px;
}
`
function Purchase() {
  return (
    <>
        <PageContainer>
          <Header >
            <BackIcon/>
            <CommunityName>공동구매</CommunityName>
          </Header>
            <Alarm type='안내' title='커뮤니티 이용 가이드'/>
            <Alarm type='공지' title='개인정보 처리방침'/>
            <Post title='이런저런제목' content='이러이러한 내용' nickname='yunhae' time='2024.11.20'/>
            <WriteIcon>
              <PlusIcon/>
            </WriteIcon>
        </PageContainer>
        <Footer></Footer>
    </>
  )
}

export default Purchase;