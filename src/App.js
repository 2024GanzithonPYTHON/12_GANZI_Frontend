import React from "react";
import RouteSetting from "./utils/route/Route";
import styled from "styled-components";
import { useLocation } from "react-router-dom";


const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;


const Content = styled.div`
  width: 100%;
  max-width: ${({ isLoginPage }) => (isLoginPage ? "100%" : "860px")};
  min-height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); //경계구분이 힘들어어 임의로 설정해둔 것입니다. 추후에 지울 예정입니다. 
  padding: ${({ isLoginPage }) => (isLoginPage ? "0" : "20px")};

  @media (max-width: 430px) {
    width: 100%;
    height: auto; //모바일에서는 높이를 유동적으로
    padding: 10px; 
    font-size: 10px; 
    overflow-x: hidden;
  }
  `
  
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
    <AppContainer>
      <Content isLoginPage={isLoginPage}>
          <RouteSetting />
      </Content>
      </AppContainer>
    </>
  );
}
export default App;