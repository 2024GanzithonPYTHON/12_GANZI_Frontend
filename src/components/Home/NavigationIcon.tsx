import styled from 'styled-components'
import { makeCenterColumn } from '../../styles/mixins'

const Wrapper = styled.div`
    width: 18%;
    height: 70%;
    ${makeCenterColumn}
    flex-direction: column;
    `
const Circle = styled.div`
    ${makeCenterColumn}
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 10px rgba(112,136,210, 0.2);
    margin-bottom: 20px;
`
const Icon = styled.div`
${makeCenterColumn}
    width: 70%;
    height: 70%;
`
const IconTitle = styled.div`
    width: 80%;
    height: 20%;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    `

function NavigationIcon({icon, iconTitle} : {icon: any, iconTitle: string}) {
  return (
    <>
    <Wrapper>
            <Circle>
                <Icon>
                    {icon}
                </Icon>
            </Circle>
    </Wrapper>
    <IconTitle>{iconTitle}</IconTitle>
</>
  )
}

export default NavigationIcon;