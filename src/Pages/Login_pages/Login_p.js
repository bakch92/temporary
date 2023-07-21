import React, { useState } from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import 숲속마음 from "../../Asset/image/숲속마음.PNG";
import styled from "styled-components";
import KakaoLoginButton from "./components/KakaoLoginButton";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리 로직 작성
  };

  const handleKakaoSuccess = (profile) => {
    console.log(profile); // 카카오톡 로그인 성공 처리
  };

  const handleKakaoFailure = (response) => {
    console.log(response); // 카카오톡 로그인 실패 처리
  };

  const handleQudivClick = () => {
    setIsModalOpen(true);
  };

  const handleButtondivClick = () => {
    window.open(
      "https://www.kakaocorp.com/page/service/service/KakaoTalk",
      "_blank"
    );
  };

  return (
    <>
      {isModalOpen && (
        <ModalBackdrop>
          <PostDetail>
            <Text my="1.3rem" fontSize="0.8rem">
              카카오톡회원가입 후 이용해 주세요
            </Text>
            <Buttondiv onClick={handleButtondivClick}>확인</Buttondiv>
          </PostDetail>
        </ModalBackdrop>
      )}
      <Logindiv>
        <Boxdiv>
          <Heading fontSize="1.5rem" my=".9rem" position="relative">
            숲속마음 로그인하기
            <i class="fa-solid fa-x" style={iconStyle}></i>
          </Heading>
          <Image src={숲속마음} alt="" boxSize="15rem" my="1.3rem"></Image>
          <form onSubmit={handleSubmit}>
            <KakaoLoginButton
              onSuccess={handleKakaoSuccess}
              onFailure={handleKakaoFailure}
            />
          </form>
          <Qudiv onClick={handleQudivClick}>
            카카오톡 아이디가 없으신가요?
          </Qudiv>
        </Boxdiv>
      </Logindiv>
    </>
  );
};

export default Login;

const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  font-weight: 700;
  width: 17rem;
  height: 9rem;
`;
const Buttondiv = styled(PostDetail)`
  width: 7rem;
  height: 2.3rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #04b8ad;
  color: #ffffff;
  &:hover {
    background-color: #00a69c;
    cursor: pointer;
  }
`;

const Qudiv = styled(Text)`
  font-size: 0.8rem;
  font-weight: 550;
  text-decoration: underline;
  color: #a8a8a8;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

const Logindiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  height: 100vh;
`;

const iconStyle = {
  position: "absolute",
  top: "1.1rem",
  right: "-2rem",
  transform: "translate(50%, -50%)",
};

const Boxdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 24px;
  border-color: transparent;
  width: 23rem;
  height: 28rem;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
