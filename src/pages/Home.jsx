import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/ScreenSizing'
import { TabContainer } from '../components/Tab'
import LogoImg from '../assets/Logo.png'
import NavigationIcon from '../components/Home/NavigationIcon'
import { CakeIcon, HeartIcon, AddressCheckIcon , ListCheckIcon} from '../assets/icons/icons'
import Footer from '../components/Footer'

const PageName = styled.div`
  width: 100%;
  height: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const LogoContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`
const Title = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: ${({theme} )=> theme.colors.mainColor};
`
const DashBoardContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`
const HotPostDashBoard = styled.div`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    border: 1px solid #EAEAEA;
    background-color: ${(props)=> props.backgroundColor};
    border-radius: 5px;
    padding-left: 5px;
    margin-top: 1em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Text = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props)=> props.fontSize};
    margin: ${(props) => props.margin};
`
const PostsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;
`
const HotPosts = styled.div`
    background-color: #F4F8FB;
    width: 40%;
    height: ${(props) => props.height || '150px'};
    border: 1px solid #EAEAEA;
    margin: 2px;
    padding: 10px;
`
const IconContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
function Home() {
  return (
    <>
    <PageContainer>
        <PageName>홈</PageName>
        <TabContainer/>

        <LogoContainer>
            <div>
                <Title style={{justifyContent:'start'}}>가정을 위한</Title>
                <Title>공동 소비 플랫폼</Title>
            </div>
            <img src={LogoImg} alt='LogoImg' width='150px' style={{marginLeft:'3em'}}></img>
        </LogoContainer>

        <TabContainer/>

        <DashBoardContainer>
            <HotPostDashBoard
                width="90%"
                height="100%"
                backgroundColor='#FCF9F4'>
                <Text width='90%' fontSize='16px' fontWeight='bold' margin= '1em 0em 1em 0em'>🔥 인기글</Text>
                <PostsContainer>
                    <HotPosts>
                        <Text fontWeight='bold'>제목</Text>
                        <Text fontSize='10px' color='#7C7C7C'>내용</Text>
                    </HotPosts>
                    <HotPosts>
                        <Text fontWeight='bold'>제목</Text>
                        <Text fontSize='10px' color='#7C7C7C'>내용</Text>
                    </HotPosts>
                </PostsContainer>
            </HotPostDashBoard>
        </DashBoardContainer>

        <IconContainer>
            <NavigationIcon
                icon={<CakeIcon/>}
                iconTitle={'D-Day'}>
            </NavigationIcon>
            <NavigationIcon
                icon={<HeartIcon/>}
                iconTitle={'관심글'}>
            </NavigationIcon>
            <NavigationIcon
                icon={<AddressCheckIcon/>}
                iconTitle={'베송지 확인'}>
            </NavigationIcon>
            <NavigationIcon
                icon={<ListCheckIcon/>}
                iconTitle={'이용 가이드'}>
            </NavigationIcon>
        </IconContainer>

        <TabContainer/>

        <DashBoardContainer>
                <Text width='90%' fontSize='16px' fontWeight='bold' margin= '1em 0em 1em 0em'>최근 공동구매 글</Text>
                <PostsContainer>
                    <HotPosts height='50%'>
                        <Text fontWeight='bold'>제목</Text>
                        <Text fontSize='10px' color='#7C7C7C'>내용</Text>
                    </HotPosts>
                    <HotPosts height='50%'>
                        <Text fontWeight='bold'>제목</Text>
                        <Text fontSize='10px' color='#7C7C7C'>내용</Text>
                    </HotPosts >
                </PostsContainer>
        </DashBoardContainer>

    
    </PageContainer>
    <Footer></Footer>
    </>
  )
}

export default Home