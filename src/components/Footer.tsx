import React from 'react'
import styled from 'styled-components'
import BoardImg from '../assets/BoardImg.png'
import HomeImg from '../assets/HomeImg.png'
import ProfileImg from '../assets/ProfileImg.png'

const ButtonContainer =styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.grayColor};
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px; /* Footer 높이 */
    position: fixed; /* 브라우저 하단에 고정 */
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; 
    background-color: #fff;
`
const NavigationBtn = styled.button`
    width: 33%;
    height: 100%;
    background-color: transparent;
    border: none;
`
function Footer() {
  return (
        <ButtonContainer>
            <NavigationBtn > <img src={BoardImg} alt="BoardImg" width='30px'/></NavigationBtn>
            <NavigationBtn style={{borderLeft:'1px solid #B6B6B6', borderRight:'1px solid #B6B6B6'}}>
                <img src={HomeImg} alt="HomeImg" width='30px' />
            </NavigationBtn>
            <NavigationBtn > <img src={ProfileImg} alt="ProfileImg" width='30px' /></NavigationBtn>
        </ButtonContainer>
  )
}

export default Footer;