import React from "react";
// import Fotter from "./Components/Fotter";
import "./Asset/font.css";
import Login from "./Pages/Login_pages/Login_p";
import Redirect from "./Pages/redirect/Redirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;

    /* 핸드폰 크기 이상일 때 */
    font-size: 10px;

    @media screen and (min-width: 768px) {
      /* 태블릿 크기 이상일 때 */
      font-size: 12px;
    }

    @media screen and (min-width: 1024px) {
      /* 작은 데스크탑 크기 이상일 때 */
      font-size: 15px;
    }

    @media screen and (min-width: 1440px) {
      /* 큰 데스크탑 크기 이상일 때 */
      font-size: 20px;

    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/oauth/redirect" element={<Redirect />}/>
          {/* <Route path="Login/" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
