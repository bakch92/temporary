import React, { useState } from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Profile_change from "./components/Profile_change";
import Choice_counselor from "./components/Choice_counselor";
import Withdrawal from "./components/Withdrawal";
import 야도란 from "../../Asset/image/야도란.PNG";
import styled from "styled-components";

const MyPage = () => {
  const [active, setActive] = useState("게인정보변경");

  return (
    <>
      <Nav />
      <Mydiv>
        <Box display="flex" flexDirection="row" width="100%" height={"80%"}>
          <Propilediv>
            <Box
              position="relative"
              display="flex"
              bg="#efefef"
              borderRadius={"90%"}
              boxSize="7rem"
              alignItems={"center"}
              justifyContent={"center"}
              mx={"4rem"}
              mb={".5rem"}
            >
              <Image src={야도란} boxSize="5rem" />
              <Box
                position="absolute"
                top="0.2rem"
                right="-0.5rem"
                bg={"#C5C5C5"}
                borderRadius={"5px"}
                px={".5rem"}
                py={".2rem"}
                fontSize={".7rem"}
                color={"white"}
              >
                내담자
              </Box>
            </Box>
            <Text fontSize="xl" mb={"4rem"}>
              닉네임
            </Text>
            <Heading w={"100%"} pl={"1rem"} fontSize={"1.3rem"}>
              마이페이지
            </Heading>
            <Box width="90%" height="3px" my={"1rem"} background="black" />

            <Thouchbox
              className={active === "게인정보변경" ? "active" : ""}
              onClick={() => setActive("게인정보변경")}
            >
              <span>게인정보 변경</span>
            </Thouchbox>
            <Thouchbox
              className={active === "찜한상담사" ? "active" : ""}
              onClick={() => setActive("찜한상담사")}
            >
              <span>찜한 상담사</span>
            </Thouchbox>
            <Thouchbox
              className={active === "회원탈퇴" ? "active" : ""}
              onClick={() => setActive("회원탈퇴")}
            >
              <span>회원 탈퇴</span>
            </Thouchbox>
          </Propilediv>
          {active === "게인정보변경" && <Profile_change />}
          {active === "찜한상담사" && <Choice_counselor />}
          {active === "회원탈퇴" && <Withdrawal />}
        </Box>
      </Mydiv>
    </>
  );
};

export default MyPage;

const Thouchbox = styled.div`
  display: flex;
  align-items: left;
  margin: 1rem 0rem;
  width: 100%;
  padding-left: 2.5rem;
  span {
    font-size: 1rem;
  }
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
  &.active {
    align-items: center;
    font-weight: bold;
  }
`;

const Propilediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Mydiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 0rem 2.7rem;
`;
