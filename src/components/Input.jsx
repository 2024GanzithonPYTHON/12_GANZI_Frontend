import styled from "styled-components";

export const LoginInputContainer = styled.input`
    width: 60%;
    height: 35px;
    border: 0.5px solid #E0E0E0;
    background-color: #fff;
    margin: 10px 0px;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 5px;
    cursor: text;
`
export const JoinInputContainer = styled.input`
    width: 80%;
    height: ${(props) => props.height};
    font-size: 16px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: ${(props) => props.borderBottom || "1px solid #B6B6B6"};
    background-color: transparent;
    margin-bottom: 35px;
    cursor: text;

    &::placeholder {
      color: #B6B6B6;
    }
`
export const BabyInfoInput = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 20px;
    border: 1px solid #609DD9;
    color: #609DD9;
    font-size: 13px;
    box-shadow: 0 10px 30px rgba(112, 136, 210, 0.1);
    background-color: #FAFAFA;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: 20px;

    &:hover {
      background-color: #ebebeb9b;
      transition: background-color 0.3s ease;
    }
`
export const NextButton = styled.button`
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