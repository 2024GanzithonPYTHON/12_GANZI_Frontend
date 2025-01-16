import styled from 'styled-components';

const AlarmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    /* border: 1px solid #000; */
`
const EachAlarm = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    width: 90%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    background-color: #F4F8FB;
    font-weight: bold;
`
const AlarmType = styled.div`
    width: 9%;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: ${({theme}) => theme.colors.mainColor};
    border-radius: 20px;
    margin:0px 20px;
`
const AlarmTitle = styled.div`
    color: #7C7C7C;
`

function Alarm({type, title} : {type: string, title: string}) {
  return (
    <AlarmContainer>
        <EachAlarm>
            <AlarmType>{type}</AlarmType>
            <AlarmTitle>{title}</AlarmTitle>
        </EachAlarm>
    </AlarmContainer>
  )
}

export default Alarm;