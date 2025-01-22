import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { ImageList } from "../data/ImageList";
import NavigationIcon from "../components/Home/NavigationIcon";
import {makeCenterColumn, makeCenterRow} from '../styles/mixins'
import { FireIcon, ShoppingBagIcon } from "../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import { CommonProps } from "../styles/CommonProps";

const PageContainer = styled.div`
  ${makeCenterColumn}
  width: 100%;
  height: auto;
`;

const PageName = styled.div`
  ${makeCenterColumn}
  width: 100%;
  height: auto;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Images = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius:10px;
`;

const ShowImage = styled.div<CommonProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: transform 0.4s ease-in-out;
`;

const Compartment = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  font-size: 40px;
  text-align: center;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentTitle = styled.div`
  width: 100%;
  padding: 8px 12px;
  align-items: center;
  display: flex;
  justify-content: start;
  font-weight: 600;
  font-size: 20px;
`
const DashBoardContainer = styled.div`
  width: 100%;
  height: 130px;
  padding: 8px 12px;
  ${makeCenterRow};
  gap: 20px;
  
`
const DashBoard = styled.div`
  ${makeCenterColumn}
  width:50%;
  height:100%;
  border-radius: 10px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease;
  }
`
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
  const [slideWidth, setSlideWidth] = useState(0); // 슬라이드 너비
  const slideRef = useRef<HTMLDivElement>(null); // 슬라이드 요소 참조
  const navigate = useNavigate();

  useEffect(() => {
    // 슬라이드 너비를 계산하여 설정
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
    // 창 크기 변화 시 슬라이드 너비 재계산
    const handleResize = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
   // 슬라이드 자동 이동
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const translateX = -currentIndex * slideWidth; // 슬라이드 이동 거리 계산
  
  const handleClick = (toWhere : string) => {
    navigate(`/${toWhere}`)
  }

    return (
    <>
      <PageContainer>
        <PageName>홈메이트</PageName>
        <Images>
          <ShowImage translateX={translateX}>
            {ImageList.map((img, index) => (
              <Compartment key={index} ref={index === 0 ? slideRef : null}>
                <img src={img} alt={`슬라이드 이미지 ${index + 1}`} />
              </Compartment>
            ))}
          </ShowImage>
        </Images>
        
        <ContentTitle>대시보드</ContentTitle>
            <DashBoardContainer>
              <DashBoard
                
                onClick={() =>handleClick('hotpost')}>
                <NavigationIcon iconTitle='인기글' icon={<FireIcon />}/>
              </DashBoard>
              <DashBoard onClick={() => handleClick('purchase')}>
                <NavigationIcon iconTitle='공동 구매' icon={<ShoppingBagIcon />}/>
                </DashBoard>
            </DashBoardContainer>
      </PageContainer>
      <Footer></Footer>
    </>
  );
}

export default Home;
