import React from 'react'
import styled from 'styled-components';

const PostContainer = styled.div`
    width:100%;
    height: auto;
    display: flex;
    align-items: center;

`
const EachPost = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${({theme}) => theme.colors.grayColor};
    padding: 0px 20px;
`
const Title = styled.div`
    width: 100%;
    height: auto;
    color: #000;
    font-size: 16px;
    margin: 5px 0px;
`
const Content = styled.div`
    color: #EAEAEA;
    font-size: 12px;
`
const NickName = styled.div`
    height: auto;
    color: #7C7C7C;
    font-size: 12px;
`
const PostInfo = styled.div`
    color: #7C7C7C;
    font-size: 12px;
`
function Post({title, content,nickname,time}) {
  return (
    <PostContainer>
        <EachPost>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <NickName>{nickname}</NickName>
            <PostInfo>{time}</PostInfo>
        </EachPost>
    </PostContainer>
  )
}

export default Post;