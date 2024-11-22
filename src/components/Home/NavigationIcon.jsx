import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
const CircleContainer = styled.div`
    width: 70%;
    height: 70%;
    margin-bottom: 10px;
`
const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #F4F8FB;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(112,136,210, 0.2);

    &:hover {
        background-color: #C8E8FF;
    };
`
const Icon = styled.div`
    width: 70%;
    height: 70%;
`
const IconTitle = styled.div`
    width: 80%;
    height: 20%;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    `

function NavigationIcon({icon, iconTitle}) {
  return (
    <Wrapper>
        <CircleContainer>
            <Circle>
                <Icon>
                    {icon}
                </Icon>
            </Circle>
        </CircleContainer>
        <IconTitle>{iconTitle}</IconTitle>
    </Wrapper>
  )
}

export default NavigationIcon;