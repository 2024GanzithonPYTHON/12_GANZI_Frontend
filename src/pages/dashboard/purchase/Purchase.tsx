import styled from 'styled-components'
import { PageContainer } from '../../../components/ScreenSizing';
import { PlusIcon, BackIcon} from '../../../assets/icons/icons'
import Alarm from '../../../components/Alarm';
import Post from '../../../components/Post';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header'
import { makeCenterColumn } from '../../../styles/mixins';
import { useQuery } from '@tanstack/react-query';
import { fetchPurchase } from '../../../api/FetchPurcahse';
import { useNavigate } from 'react-router-dom';

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

const IconWrapper = styled.div`
  width: 7%;
  height: 100%;
  cursor: pointer;
`
function Purchase() {
  const navigate = useNavigate();
  const {isLoading, data} = useQuery({
    queryKey : ["getPurchase"], 
    queryFn : fetchPurchase})

  interface PurchaseContent {
    title:string;
    nickname: string;
    date: string;
    body: string;
    id: number;
    user: number;
  }
  
  return (
    <>
        <PageContainer>
          <Header >
          <IconWrapper  onClick={() => navigate('/home')}>
            <BackIcon/>
          </IconWrapper>
            <CommunityName>공동구매</CommunityName>
          </Header>
            <Alarm type='안내' title='커뮤니티 이용 가이드'/>
            <Alarm type='공지' title='개인정보 처리방침'/>
            {isLoading ? (
        "Loading"
      ) : (
       <>
        {data.map((item:PurchaseContent) => {
          return (
          <>  
          <Post 
            user = {item.user}
            id = {item.id}
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
            <WriteIcon onClick={() => navigate('/purchasewrite')}>
              <PlusIcon/>
            </WriteIcon>
        </PageContainer>
        <Footer></Footer>
    </>
  )
}

export default Purchase;