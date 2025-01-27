// import React, { useState } from 'react'
import styled from 'styled-components';

interface Tab {
    marginTop?: string;
    marginBottom?:string;
}

export const TabBar = styled.div<Tab>`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor};
`