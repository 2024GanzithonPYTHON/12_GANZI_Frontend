import styled from "styled-components";
import {CommonProps } from '../styles/CommonProps';

export const NextButton = styled.button<CommonProps>`
    width: 62%;
    height: 50px;
    border: 0.5px solid #C6C6C6;
    background-color: #FCF9F4;
    /* margin: 50px 0px 0px 0px; */
    border-radius: 8px;
    font-size: 16px;
    color: #898989;
    padding-left: 5px;
    cursor: pointer;
    margin-top: ${(props) => props.marginTop};

    &:hover {
      background-color: #EBEBEB;
      transition: background-color 0.3s ease;
    }
` 