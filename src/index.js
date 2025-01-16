import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import theme from './utils/theme/Theme.tsx';
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>        
        </ThemeProvider>
    </React.StrictMode>
);