import React, { useState } from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/ScreenSizing'
import Alarm from '../components/Alarm'
import { PlusIcon, CloseImg, ImageIcon } from '../assets/icons/icons'
import { Header } from '../components/Header'

import {makeCenterColumn, makeCenterRow} from '../styles/mixins'
import { useNavigate } from 'react-router-dom'

const CommunityName = styled.div`
${makeCenterRow}
  width: 100%;
  height: auto;
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
`
const CategotyContainer =  styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
`
const CategoryBtn = styled.button`
  ${makeCenterColumn}
  width: 10%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #000;
  background-color: #fff;
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
      background-color: #EBEBEB;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }
`
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
const InputContent = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 7px;

  .placeholder {
    color: ${({theme}) => theme.colors.placeHolderColor};
  }
`
const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid #000;

`
const ImgContainer= styled.div`
${makeCenterColumn}
  width: 80%;
  height: 100%;
  border: 1px solid #000;
  border-radius: 6px;
  cursor: pointer;
`
const ImgAdd = styled.input`
  width: 70%;
  height: 100%;
  cursor: pointer;
  border: none;

  input[type="file"]{
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`
const CloseIcon = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

function Write() {
  const [postImg,setPostImg] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const navigate = useNavigate();
  const handleClose = () => {    
    navigate('/home');
  }
  const imageUrl = [];
  const uploadImages = (e) => {
    const ImageArr = e.tatget.files;
    setPostImg(ImageArr);

    for(let i =0; i< ImageArr.length; i++) {
      const fileRead = new FileReader();
      fileRead.onload = () => {
        imageUrl[i] = fileRead.result;
        setPreviewImg([...imageUrl]);
        fileRead.readAsDataURL(ImageArr[i])
      }
    }

  }

  return (
    <PageContainer style={{display:'flex' , justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Header>
      <CloseIcon onClick={handleClose}>
        <CloseImg></CloseImg>
      </CloseIcon>
      <CommunityName> 공동구매 글쓰기</CommunityName>
      </Header>

      <Alarm type='공지' title='공동구매 글쓰기 가이드'/>

      <InputContainer>
        <InputType>카테고리</InputType>
        
        <CategotyContainer>
          <CategoryBtn>공동구매</CategoryBtn>
          <CategoryBtn>게시글</CategoryBtn>
        </CategotyContainer>
      </InputContainer>
        
        <InputContainer>
          <InputType>제목</InputType>
          <InputContent placeholder='제목' />
        </InputContainer>

        <InputContainer>
          <InputType>사진</InputType>
          <ImageList>
          <ImgContainer>
            <PlusIcon onload={uploadImages}/>
            <ImgAdd type='file'></ImgAdd>
          </ImgContainer>
            {previewImg.map((imgSrc,index) => (
                <ImgContainer key={index}>
                  <img src={imgSrc}></img>
                  </ImgContainer>
            ))}
          </ImageList>
        </InputContainer>


        
        {/* <CircleWrapper>
          <CircleContainer>
            <Circle>
              <ImageIcon></ImageIcon>
            </Circle>
          </CircleContainer>
        </CircleWrapper> */}
    </PageContainer>


  )
}

export default Write