import styled from 'styled-components'
import { PageContainer } from '../../../components/ScreenSizing'
import Alarm from '../../../components/Alarm'
import {CloseImg} from '../../../assets/icons/icons'
import { Header } from '../../../components/Header'
import {makeCenterColumn, makeCenterRow} from '../../../styles/mixins'
import { useNavigate } from 'react-router-dom'
import { CommonProps } from '../../../styles/CommonProps'
import { useMutation } from '@tanstack/react-query'
import instance from '../../../api/instance'
import { useState } from 'react'
import Modal from '../../../components/Modal/Modal'

const CommunityName = styled.div`
${makeCenterRow}
  width: 100%;
  height: auto;
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 10px;
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
const InputContent = styled.textarea<CommonProps>`
  width: 100%;
  height: ${(props) => props.height || '30px'};
  border-radius: 6px; 
  border: ${({theme})=> theme.colors.inputContainerColor}; 
  padding: 7px 0px 0px 7px;
  font-family: "Pretendard-Regular";
  word-break: keep-all;
  resize: none;

  &::placeholder {
  color: ${({theme})=> theme.colors.placeHolderColor};
  font-size: 13px;
  padding: 6px 0px;
}
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
interface NewPost {
    title: string;
    body: string;
}
function HotIssueWrite() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] =useState(false);
    const [modalData, setModalData] = useState({ 
      isOpen: false, 
      title: "", 
      message: "",
      endpoint:"",
      btnContent: "",
      isButton: false,
  });

    const [post, setPost] = useState<NewPost>({
        title: '',
        body:''
    });

    const handleClickBack = () => {
        navigate(-1);
    }

    const getAccessToken = localStorage.getItem('access');

    const mutation = useMutation({
        mutationFn: async (hotPostUploadReq:NewPost ) => {
            const response = await instance
                .post('/blog/', hotPostUploadReq,
                  {
                    headers : {
                      Authorization: `Bearer ${getAccessToken}`
                    }
                  }
                )
            return response.data
        },

        onMutate: () => {
        setModalData({
          isOpen: true,
          title: "처리 중",
          message: "게시글을 업로드 하고 있습니다.",
          isButton: false,
          endpoint: '',
          btnContent:""
      });
            
        },

        onSuccess: () => {
          setModalData({
            isOpen: true,
            title: "게시글 업로드 완료",
            message: "작성하신 게시글을 성공적으로 업로드하였습니다. 🎉",
            isButton: true,
            endpoint:'/hotpost',
            btnContent: '확인',
          });
          
        },
        onError: () => {
          //만약 에러코드가 401이면, 
          if(Error)
          //refresf 토큰을 가져와서 
          //const getRefrestToken = localStorage.getItem('refresf');

          console.log(Error);
          
        }
    })

    const handlePostData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        //joinData가 객체 형태이므로 저장도 객체 형태로 키와 값쌍으로 연결시켜서 저장해주어야 한다.
        const {name, value} = e.target;
    
        setPost((prev) => ({
          ...prev,
          [name] : value,
        }));
          }

    const handleSubmit = () => {
        mutation.mutate(post);
    }
  return (
    <>
    <Modal
      isOpen={modalData.isOpen}
      title={modalData.title}
      message={modalData.message}
      isButton={modalData.isButton}
      endpoint={modalData.endpoint}
      onClose={() => setIsModalOpen(false)}
      btnContent={modalData.btnContent}
    />
    <PageContainer style={{display:'flex' , justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
         <Header>
      <CloseIcon onClick={handleClickBack}>
        <CloseImg></CloseImg>
      </CloseIcon>
      <CommunityName> 인기글 글쓰기</CommunityName>
      </Header>

      <Alarm type='공지' title='게시판 글쓰기 가이드'/>
        <InputContainer>
          <InputType>제목</InputType>
          <InputContent 
            placeholder='제목'
            name='title'
            onChange={handlePostData} />
        </InputContainer>

        <InputContainer>
          <InputType>게시글 내용</InputType>
          <InputContent 
            placeholder='게시글 설명' 
            height='1000px' 
            name='body'
            onChange={handlePostData}/>
        </InputContainer>

        <SubmmitBtm onClick={handleSubmit}>작성 완료</SubmmitBtm>

    </PageContainer>
    </>
  )
}

export default HotIssueWrite;