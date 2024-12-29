import React, { useState} from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/ScreenSizing'
import Alarm from '../components/Alarm'
import { PlusIcon, CloseImg} from '../assets/icons/icons'
import { Header } from '../components/Header'
import {makeCenterColumn, makeCenterRow} from '../styles/mixins'
import { useNavigate } from 'react-router-dom'
import { TabContainer } from '../components/Tab'


const CommunityName = styled.div`
${makeCenterRow}
  width: 100%;
  height: auto;
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 10px;
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
  border: 1px solid rgba(0, 0, 0, 0.2);
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
const InputContent = styled.textarea`
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
const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 90px;
  gap:10px;
`
const ImgContainer= styled.div`
${makeCenterColumn}
  width: 10%;
  height: 100%;
  border: 1px solid ${({theme})=> theme.colors.placeHolderColor};
  border-radius: 6px;
  cursor: pointer;
`
const EachImage = styled.div`
${makeCenterColumn}
  width: 10%;
  height: 100%;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    overflow: hidden;
  }
`
const ImgInput = styled.input`
  width: 10%;
  position: absolute;
  opacity: 0;
  z-index: 5;
`
const CloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
  width: 13px;
  height: 13px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
`
const SubmmitBtm = styled.button`
  width: 60%;
  height: 40px;
  border-radius: 6px;
  background-color: #3373BA;
  margin: 40px 0px;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  &:hover {
      background-color: #b2ceef;
      transition: background-color 0.2s ease;
      cursor: pointer;
      color: #000;
      font-weight: bold;

    }
`
function Write() {

  const [showImg,setShowImg] = useState([]);
  const navigate = useNavigate();
  const handleClose = () => {    
    navigate('/home');
  }

  const uploadImages =  (e) => {
    const ImageArr = Array.from(e.target.files);
    const promises = ImageArr.map((img) => {
      return new Promise((resolve, reject) => {

        const fileRead = new FileReader();
        fileRead.readAsDataURL(img); //이미지을 텍스트로 가공

        fileRead.onload = () => {      //파일 읽는 게 성공할 시 실행되는 함수
          resolve(fileRead.result);
        }

        fileRead.onerror = (error) => {
          reject(error,"have a problem");
        }
    
      });
    });
    Promise.all(promises)
      .then((imageUrl) => {
        setShowImg((prev) => [...prev, ...imageUrl]);
      })
      .catch((error) => {
        console.error("error",error);
      })
      };

  //이미지삭제
  const handleDeleteImg = (deletedIndex) => {
    if(deletedIndex) {
    const updatedImg = showImg.filter((item, index) => deletedIndex!== index)
    setShowImg(updatedImg);
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
          <ImgInput multiple={true} type='file' onChange={uploadImages} />
          <div style={{position: 'relative', zIndex:'2'}}>
              <PlusIcon/>
          </div>
          </ImgContainer>
            {showImg.map((imgSrc,index) => (
              <EachImage key={index}>                  
                <CloseIcon onClick={() => handleDeleteImg(index)}>
                  <CloseImg/>
                </CloseIcon>
                <img src={imgSrc} alt={`img ${index}`}></img>
              </EachImage>
            ))}
          </ImageList>
        </InputContainer>

        <InputContainer>
          <InputType>구매 신청 시작 날짜</InputType>
          <InputContent placeholder='YYYY-MM-DD부터' />
        </InputContainer>

        <InputContainer>
          <InputType>구매 신청 마감 날짜</InputType>
          <InputContent placeholder='YYYY-MM-DD까지' />
        </InputContainer>

        <InputContainer>
          <InputType>구매 신청 마감 시간</InputType>
          <InputContent placeholder='00:00까지' />
        </InputContainer>

        <InputContainer>
          <InputType>최소 충족 인원</InputType>
          <InputContent placeholder='숫자만 입력해주세요.' />
        </InputContainer>

        <InputContainer>
          <InputType>공동 구매 내용</InputType>
          <InputContent placeholder='자세한 설명' height='500px' />
        </InputContainer>

        <TabContainer marginTop='50px' marginBottom='10px'/>

        <CommunityName>이메일 내용 작성하기</CommunityName>

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
          <InputType>판매자님 전화번호</InputType>
          <InputContent 
            placeholder='숫자만 입력해주세요'/>
        </InputContainer>

        <InputContainer>
          <InputType>문의 받으실 이메일</InputType>
          <InputContent 
            placeholder='이메일'/>
        </InputContainer>

        <SubmmitBtm>작성 완료</SubmmitBtm>
        
    </PageContainer>


  )
}

export default Write