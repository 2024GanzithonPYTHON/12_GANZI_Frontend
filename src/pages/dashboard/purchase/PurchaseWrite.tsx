import React, {useEffect, useState} from 'react'
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

interface Post {
  title: string;
  image?: string[];
  body: string;
  duration_date: string;
  duration_time: string;
  min_participants: number;
  email_content: {
    subject: string;
    body: string;
    payment_period: string;
    bank_name: string;
    account_number: string;
    contact_info: string;
  }

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

  const [emailData, setEmailData] = useState( {
    subject: "",
    body:"",
    payment_period: "",
    bank_name: "",
    account_number: "",
    contact_info: ""
  })

  const [purchaseData, setPurchaseData] = useState({
    title: "",
    image: [''],
    body: "",
    duration_date:"",
    duration_time:"",
    min_participants: 0,
    
  }
)

  const [postData, setPostData] = useState<Post>({
    title: "",
    image: [], // 빈 문자열
    body: "",
    duration_date: "",
    duration_time: "",
    min_participants: 0,
    email_content: {
      subject: "",
      body: "",
      payment_period: "",
      bank_name: "",
      account_number: "",
      contact_info: "",
    },
  })

  const getAccessToken = localStorage.getItem('access');

    const mutation = useMutation({
      mutationFn: async (purchaseUploadReq: FormData) => {
          const response = await instance.post('/purchase/', purchaseUploadReq, 
            {
              headers: {
              "Content-Type" : "multipart/form-data",
              Authorization : `Bearer ${getAccessToken}`
              }
            })
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
          endpoint:'/purchase',
          btnContent: '확인',
        });
      },

      onError: () => {
        setModalData({
          isOpen: true,
          title: "게시글 업로드 실패",
          message: "게시글 업로드에 실패했습니다. 다시 시도 해주세요", //새로고침 막아서 내용 날라가지 않게 해야함. 
          isButton: true,
          endpoint:'/purchasewrite',
          btnContent: '확인',
        })
      }
      
    });


  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const formData: FormData = new FormData();
    const emailContent = postData.email_content;
    
    // 필수 필드 추가
    if(postData) {

      formData.append("title", postData.title || '7');
      formData.append("body", postData.body || '7');
      formData.append("duration_date", postData.duration_date  || '7');
      formData.append("duration_time", postData.duration_time || '7');
      formData.append("min_participants", postData.min_participants.toString() || '0');
      formData.append("email_content.subject", emailContent.subject || "");
      formData.append("email_content.body", emailContent.body || "");
      formData.append("email_content.payment_period", emailContent.payment_period || "");
      formData.append("email_content.bank_name", emailContent.bank_name || "");
      formData.append("email_content.account_number", emailContent.account_number || "");
      formData.append("email_content.contact_info", emailContent.contact_info || "");  
      
      // 이미지 배열 처리
      if (Array.isArray(postData.image) && postData.image.length > 0) {
        postData.image.forEach((file) => {
          formData.append("image", file);
        });
      }
    
    }
  
    console.log("FormData entries:");
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });


    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error("에러 발생: ", error);
    }    
  };

  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      ...purchaseData,
      email_content: {
        ...prev.email_content,
        ...emailData,
      },
    }));
  }, [purchaseData, emailData]); 

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
      <PostContent purchaseData={purchaseData} setPurchaseData={setPurchaseData}/>

      <TabBar marginTop='50px' marginBottom='10px'/>

      <CommunityName>이메일 내용 작성하기</CommunityName>
      <EmailContent emailData={emailData} setEmailData= {setEmailData}/>  

      <SubmmitBtm onClick={handleSubmit}>작성 완료</SubmmitBtm>
        
    </PageContainer>
</>

  )
}

export default PurchaseWrite;