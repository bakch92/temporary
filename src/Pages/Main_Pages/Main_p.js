import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function Main_p() {
  const isDesktop = window.innerWidth < 768;
  let [login_info, mod_login] = useState({});

  const DesktopPage = () => {
    return (
      <DesktopContainer>
        <DesktopContent>This is the desktop version</DesktopContent>
      </DesktopContainer>
    );
  };

  const MobilePage = () => {
    return (
      <WebContainer>
        <WebContent>This is the mobile version</WebContent>
      </WebContainer>
    );
  };

  return (
    <>
      <Router>
        <Switch>
          {isDesktop ? (
            <Route path="/" component={MobilePage} />
          ) : (
            <Route path="/" component={DesktopPage} />
          )}
        </Switch>
      </Router>
    </>
  );
}

const DesktopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

// 웹 버전 스타일
const WebContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

// 데스크탑 버전 컴포넌트
const DesktopContent = styled.div`
  font-size: 24px;
  color: #333;
`;

// 웹 버전 컴포넌트
const WebContent = styled.div`
  font-size: 36px;
  color: #333;
`;

export default Main_p;
