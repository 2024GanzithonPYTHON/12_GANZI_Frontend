import React from "react";
import RouteSetting from "./utils/route/Route";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 1px solid blue;
`;
const Content = styled.div`
  width: 80%;
  max-width: 640px;
  min-height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); //경계구분이 힘들어어 임의로 설정해둔 것입니다. 추후에 지울 예정입니다. 
  
  @media (max-width: 430px) {
    width: 100%;
    height: auto; //모바일에서는 높이를 유동적으로
    padding: 10px; 
    font-size: 14px; 
    overflow-x: hidden;;
  }
  `
  
function App() {
  return (
    <>
    <AppContainer>
      <Content>
          <RouteSetting />
      </Content>
      </AppContainer>
    </>
  );
}
export default App;