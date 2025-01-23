// 이메일데이터를 제외한 공동 구매 글 전체 데이터
import styled from 'styled-components'
import { PlusIcon, CloseImg} from '../../../assets/icons/icons'
import { CommonProps } from '../../../styles/CommonProps'
import {makeCenterColumn} from '../../../styles/mixins'
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
interface PurchasePost {
    title: string;
    image?: string[];
    body: string;
    duration_date: string;
    duration_time: string;
    min_participants: number; //아마 number로 변환해줘야 할 듯 
  }

function PostContent() {
    const [showImg,setShowImg] = useState<string[]>([]);
    const uploadImages =  (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) {
          return;
        } 
          const ImageArr = Array.from(e.target.files);
        
        const promises = ImageArr.map((img) => {
          return new Promise<string>((resolve, reject) => {
    
            const fileRead = new FileReader();
            fileRead.readAsDataURL(img); //이미지을 텍스트로 가공
    
            fileRead.onload = () => {  //파일 읽는 게 성공할 시 실행되는 함수
            resolve(fileRead.result as string ); //resolve() : promise 상태를 성공으로 바꾸고 값을 반환하는 함수 
            }
    
            fileRead.onerror = (error) => {
              reject(error);
            }
        
          });
        });
    
        Promise.all(promises) //PromiseResult 값만 배열로 반환
          .then((imageUrl) => {
            // console.log('imageUrl :', imageUrl);  //["data:image/png;base64,...", "data:image/png;base64,..."]
            setShowImg((prev: string[]) => [...prev, ...imageUrl]);
          })
          .catch((error) => {
            console.error("error",error);
          })
          };
    
      //이미지삭제
      const handleDeleteImg = (deletedIndex: number) => {
        if(deletedIndex) {
        const updatedImg = showImg.filter((item, index) => deletedIndex!== index)
        setShowImg(updatedImg);
        }
      }

      const [purchasePost, setPurchasePost] = useState<PurchasePost>({
        title: "",
        image: showImg,
        body: "",
        duration_date:"",
        duration_time:"",
        min_participants: 0,
      })

      const handlePostData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        //joinData가 객체 형태이므로 저장도 객체 형태로 키와 값쌍으로 연결시켜서 저장해주어야 한다.
        const {name, value} = e.target;
      
        setPurchasePost((prev) => ({
          ...prev,
          [name] : value,
        }));
          }

  return (
    <>
          <InputContainer>
          <InputType>제목</InputType>
          <InputContent 
            placeholder='제목'
            name='title'
            onChange={handlePostData}  />
        </InputContainer>

        <InputContainer>
          <InputType>사진</InputType>
          <ImageList>
          <ImgContainer>
          <ImgInput 
            multiple={true} 
            type='file' 
            onChange={uploadImages} />
          <div style={{position: 'relative', zIndex:'2'}}>
              <PlusIcon style={{cursor:'pointer'}}/>
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
          <InputType>구매 신청 마감 날짜</InputType>
          <InputContent 
            placeholder='YYYY-MM-DD'
            name='duration_date'
            onChange={handlePostData}  />
        </InputContainer>

        <InputContainer>
          <InputType>구매 신청 마감 시간</InputType>
          <InputContent 
            placeholder='00:00'
            name='duration_time'
            onChange={handlePostData}   />
        </InputContainer>

        <InputContainer>
          <InputType>최소 충족 인원</InputType>
          <InputContent 
            placeholder='숫자만 입력해주세요.'
            name='min_participants'
            onChange={handlePostData}
             />
        </InputContainer>

        <InputContainer>
          <InputType>공동 구매 내용</InputType>
          <InputContent 
            placeholder='자세한 설명' 
            height='500px'
            name='body'
            onChange={handlePostData}
             />
        </InputContainer>
    </>
  )
}

export default PostContent;