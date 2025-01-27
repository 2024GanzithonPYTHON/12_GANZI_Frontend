import { PageContainer } from '../../../components/ScreenSizing';
import { BackIcon, PlusIcon } from '../../../assets/icons/icons';
import styled from 'styled-components';
import Alarm from '../../../components/Alarm';
import Post from '../../../components/Post';
import Footer from '../../../components/Footer';
import { makeCenterColumn } from '../../../styles/mixins';
import { Header } from '../../../components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchBlog } from '../../../api/FetchBlog';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const CommunityName = styled.div`
  width: 100%;
  height: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.div`
  width: 7%;
  height: 100%;
  cursor: pointer;
`;
const WriteIcon = styled.div`
  ${makeCenterColumn}
  position: fixed;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 50px;
  height: 50px;
  cursor: pointer;
  bottom: 100px;
  right: 300px;

  @media (max-width: 430px) {
    width: 40px;
    bottom: 80px;
    right: 15px;
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const PostWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  text-overflow: ellipsis;
  overflow: hidden;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f7f7f7e1;
    transition: background-color 0.3s ease;
  }
`;

function HotPost() {
  const navigate = useNavigate();
  
  const { isLoading, data } = useQuery({
    queryKey: ['getBlogContent'],
    queryFn: fetchBlog,
  });
  
  const handleNewHotissue = () => {
    navigate('/hotissuewrite');
  };
  
  

  const handleSearchDetail = (postId : number) => {
    //postId 가져왔으니까 이제 api 연결 로직 짜면됨 
    console.log(postId);
  }

  interface BlogContent {
    title: string;
    nickname: string;
    date: string;
    body: string;
    id: number;
    user: number;
  }

  return (
    <>
      <PageContainer>
        <Header fontWeight="bold">
          <IconWrapper onClick={() => navigate('/home')}>
            <BackIcon />
          </IconWrapper>
          <CommunityName>인기글 게시판</CommunityName>
        </Header>

        <Alarm type="안내" title="커뮤니티 이용 가이드" />
        <Alarm type="공지" title="개인정보 처리방침" />

        {isLoading ? (
          'Loading'
        ) : (
          <PostContainer>
            {data.map((item: BlogContent) => (
              <PostWrapper 
                key={item.id}
                onClick={() => handleSearchDetail(item.id)}>
                <Post
                  user = {item.user}
                  id = {item.id}
                  title={item.title}
                  content={item.body}
                  nickname={item.nickname}
                  time={item.date}
                />
              </PostWrapper>
            ))}
          </PostContainer>
        )}

        <WriteIcon onClick={handleNewHotissue}>
          <PlusIcon />
        </WriteIcon>
      </PageContainer>
      <Footer />
    </>
  );
}

export default HotPost;
