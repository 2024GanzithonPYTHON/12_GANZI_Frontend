import React, { useState } from 'react'
import styled from 'styled-components';

export const TabContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor};
`
const EachTab = styled.div`
    width: 6%;
    color: ${(props) => (props.isActive ? 'black' : props.theme.colors.grayColor)};
    cursor: pointer;
    margin: 0px 10px;
    `
const TabMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: auto;
    color: ${(props) => (props.isActive ? 'black' : props.theme.colors.grayColor)};
    font-size: 12px;
    font-weight: bold;
`
const TabUnderLine = styled.div`
    width: 100%;
    height: 4px;
    background-color: ${(props) => (props.isActive ? "black" :  "transparent")};
    transition: background-color 0.3s ease;
`

function Tab() {
    const [currentTab, SelectedTab] = useState(0);

    const tabName = [
        { name: '인기글' },
        { name: '공동구매' },
    ];

    const handleSelectTab = (index) => {
        SelectedTab(index)
    }

    return (
        <div>
            <TabContainer>
                {tabName.map((item, index) => (
                    <EachTab
                        key={index}
                        isActive={index === currentTab}
                        onClick={() => handleSelectTab(index)}>
                        <TabMenu isActive={index === currentTab}>{item.name}</TabMenu>
                        <TabUnderLine isActive={index === currentTab} />
                    </EachTab>
                ))}

            </TabContainer>
        </div >
    )
}

export default Tab;