import { PageContainer } from '../components/ScreenSizing';
import {BackIcon, PlusIcon} from '../assets/icons/icons'
import styled from 'styled-components';
import Alarm from '../components/Alarm';
import Post from '../components/Post';
import Footer from '../components/Footer';
import { makeCenterColumn } from '../styles/mixins';
import { Header } from '../components/Header';
import {useQuery } from '@tanstack/react-query';
import { fetchBlog } from '../api/FetchBlog';

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
function HotPost() {
  
  const {isLoading, data} = useQuery({
    queryKey: ['getBlogContent'],
    queryFn: fetchBlog,
  });
     
  console.log(data);
  
  interface BlogContent {
    title:string;
    nickname: string;
    date: string;
    body: string;
  }

  return (
    <>
    <PageContainer>
    <Header fontWeight='bold'>
        <BackIcon/>
        <CommunityName>인기글 게시판</CommunityName>

      </Header>        

      <Alarm type='안내' title='커뮤니티 이용 가이드'/>
      <Alarm type='공지' title='개인정보 처리방침'/>
      {isLoading ? (
        "Loading"
      ) : (
       <>
        {data.map((item:BlogContent) => {
          return (
          <>  
          <Post 
            title={item.title}
            content={item.body}
            nickname={item.nickname}
            time={item.date}/>
        </>
          )})}
                <WriteIcon>
          <PlusIcon/>
        </WriteIcon>    
</>

      
      )}
  
      </PageContainer>
    <Footer></Footer>
  </>
  )
}
export default HotPost;