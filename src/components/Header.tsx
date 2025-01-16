import styled from "styled-components";
import { CommonProps } from "../styles/CommonProps";

export const Header = styled.div<CommonProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`