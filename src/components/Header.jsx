import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};;
`