import React, {useState} from 'react'
import styled from 'styled-components'
import { PageContainer } from '../../../components/ScreenSizing'
import Alarm from '../../../components/Alarm'
import {CloseImg} from '../../../assets/icons/icons'
import { Header } from '../../../components/Header'
import {makeCenterRow} from '../../../styles/mixins'
import { useNavigate } from 'react-router-dom'
import { TabBar } from '../../../components/Tab'
import { useMutation } from '@tanstack/react-query'
import instance from '../../../api/instance'
import Modal from '../../../components/Modal/Modal'
import EmailContent from './EmailContent'
import PostContent from './PostContent'

const CommunityName = styled.div`
${makeCenterRow}
  width: 100%;
  height: auto;
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 10px;
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

interface PostData {

}

function PurchaseWrite() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState({ 
    isOpen: false, 
    title: "", 
    message: "",
    endpoint:"",
    btnContent: "",
    isButton: false,
});


    const mutation = useMutation({
      mutationFn: async (purchaseUploadReq :  PostData ) => {
          const response = await instance.post('/purchase/', purchaseUploadReq)
          console.log(purchaseUploadReq);
          
          return response.data;
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

      onError: (e : React.MouseEvent) => {
        e.preventDefault();
        setModalData({
          isOpen: true,
          title: "게시글 업로드 실패",
          message: "게시글 업로드에 실패했습니다. 다시 시도 해주세요", //새로고침 막아서 내용 날라가지 않게 해야함. 
          isButton: true,
          endpoint:'',
          btnContent: '확인',
        })
      }
      
    })

    const handleSubmit = () => {
      // mutation.mutate(post);
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
      <CloseIcon onClick={() => navigate('/home')}>
        <CloseImg />
      </CloseIcon>
      <CommunityName> 공동구매 글쓰기</CommunityName>
      </Header>

      <Alarm type='공지' title='공동구매 글쓰기 가이드'/>
      <PostContent></PostContent>

      <TabBar marginTop='50px' marginBottom='10px'/>

      <CommunityName>이메일 내용 작성하기</CommunityName>
      <EmailContent/>  

      <SubmmitBtm onClick={handleSubmit}>작성 완료</SubmmitBtm>
        
    </PageContainer>
</>

  )
}

export default PurchaseWrite;