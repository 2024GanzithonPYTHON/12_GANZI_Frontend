// 이메일 데이터를 제외한 공동 구매 글 전체 데이터
import styled from 'styled-components'
import { PlusIcon, CloseImg} from '../../../assets/icons/icons'
import { CommonProps } from '../../../styles/CommonProps'
import {makeCenterColumn} from '../../../styles/mixins'
import {useState } from 'react'

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
    image: string[];
    body: string;
    duration_date: string;
    duration_time: string;
    min_participants: number; 
  }

  interface PurchasePostProps {
    purchaseData : PurchasePost,
    setPurchaseData : React.Dispatch<React.SetStateAction<PurchasePost>>
  }

function PostContent({purchaseData, setPurchaseData} : PurchasePostProps) {
    const [showImg,setShowImg] = useState<string[]>([]);
    const uploadImages =  (e: React.ChangeEvent<HTMLInputElement>) => {
      const files =   e.target.files
      if(!files) {
          return;
        } 
        const ImageArr = Array.from(files);
        
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
            setShowImg((prev) => {
              const updatedImages =  [...prev, ...imageUrl];
              setPurchaseData((postData) => ({
                ...postData,
                image: updatedImages,
              }));
              return updatedImages;
            });
          })
          .catch((error) => {
            console.error("error",error);
          })
          };
    
      //이미지삭제
      const handleDeleteImg = (deletedIndex: number) => {
          setShowImg((prev) => {
            const updatedImg = prev.filter((_, index) => deletedIndex!== index);
            setPurchaseData((post) => ({
              ...post,
              image: updatedImg,
            }));
            return updatedImg;
          });
      };


      const handlePostData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setPurchaseData((prev) => ({
          ...prev,
          [name] : name === 'image' ? showImg : value,
        }));
      }

  return (
    <>
          <InputContainer>
          <InputType>제목</InputType>
          <InputContent 
            placeholder='제목'
            name='title'
            onChange={handlePostData}
            value={purchaseData.title}  />
        </InputContainer>

        <InputContainer>
          <InputType>사진</InputType>
          <ImageList>
          <ImgContainer>
          <ImgInput 
            multiple={true} 
            type='file' 
            name='image' //여기까지 함. input 태그내에 name 설정하는 거 계속 하면 됨. => 데이터 잘 들어오는 지 확인 => 상위 페이지로 데이터 넘기기
            onChange={uploadImages}
            /> 
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
            onChange={handlePostData}
            value={purchaseData.duration_date}  />
        </InputContainer>

        <InputContainer>
          <InputType>구매 신청 마감 시간</InputType>
          <InputContent 
            placeholder='00:00:00'
            name='duration_time'
            onChange={handlePostData}
            value={purchaseData.duration_time}   />
        </InputContainer>

        <InputContainer>
          <InputType>최소 충족 인원</InputType>
          <InputContent 
            placeholder='숫자만 입력해주세요.'
            name='min_participants'
            onChange={handlePostData}
            value={purchaseData.min_participants}
             />
        </InputContainer>

        <InputContainer>
          <InputType>공동 구매 내용</InputType>
          <InputContent 
            placeholder='자세한 설명' 
            height='500px'
            name='body'
            onChange={handlePostData}
            value={purchaseData.body}
             />
        </InputContainer>
    </>
  )
}

export default PostContent;