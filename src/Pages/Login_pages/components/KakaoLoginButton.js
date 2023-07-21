import React from "react";
import Kakao_icon from "../../../Asset/image/kakao_login_medium_narrow.png";
// import Kakao_icon from "../../../Asset/image/free-icon-kakao-talk-2111466.png";
import { Button, Image } from "@chakra-ui/react";
import styled from "styled-components";


const KakaoLoginButton = () => {
  const BACKEND_PORT = '8181'
  const BACKEND_URL = `http://ec2-54-180-154-36.ap-northeast-2.compute.amazonaws.com:${BACKEND_PORT}`
  const FRONTEND_PORT = `80`
  const REDIRECT_URI = `http://ec2-13-125-98-133.ap-northeast-2.compute.amazonaws.com:${FRONTEND_PORT}/oauth/redirect`
  

const kakaoClick = () => {
  window.location.href = `${BACKEND_URL}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`
}

  return (
    // <KakaoLogin
    //   token=""
    //   onSuccess={responseKaKao}
    //   onFailure={responseKaKao}
    //   render={({ onClick }) => (
    //     <Image
    //       src={Kakao_icon}
    //       alt="My Image"
    //       width="12rem"
    //       my="1rem"
    //       onClick={onClick}
    //       _hover={{
    //         cursor: "pointer",
    //       }}
    //     />
    //   )}
    // />
        <StyledButton onClick={kakaoClick}>
          <img src={Kakao_icon} alt=""></img>
          카카오톡 로그인하기
        </StyledButton>
  );
};


export default KakaoLoginButton;

const StyledButton = styled(Button)`
  background-color: #ffff3b;
  height: 2.3rem;
  width: 16rem;
  border-radius: 10px;
  margin: 0.5rem 0px;
  border-color: transparent;
  font-size: 0.8rem;
  font-weight: 550;
  color: #412723;
  z-index: 0;
  img {
    margin: 0px 10px;
    height: 1.4rem;
    width: 1.4rem;
  }
  &:hover {
    background-color: #ffeb3b;
    color: #000000;
    /* 호버 상태에서의 스타일을 정의합니다 */
  }
`;
