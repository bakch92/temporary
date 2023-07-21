import React from "react";
import styled from "styled-components";
import { Box, Image } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle } from "@fortawesome/free-solid-svg-icons";
import 야도란 from "../../../Asset/image/야도란.PNG";
function Nav() {
  return (
    <>
      <Navdiv>
        <NavItem>TEAM마인드크래프터</NavItem>
        <NavItem>상담사 찾기</NavItem>
        <NavItem>커뮤니티</NavItem>
        <NavItem>고객센터</NavItem>
        <Box display="flex" marginLeft="auto" alignItems="center" mr="3rem">
          <Box
            position="relative"
            display="flex"
            boxSize={"2rem"}
            alignItems="center"
          >
            <BellIcon boxSize="1.2rem" />
            <Box
              position="absolute"
              top=".3rem"
              right="0.7rem"
              boxSize="0.2rem"
              bg="red"
              borderRadius="50%"
            />
          </Box>
          <Box
            display="flex"
            borderRadius={"90%"}
            alignItems={"center"}
            justifyContent={"center"}
            boxSize="1.5rem"
            mx={".5rem"}
          >
            <Image src={야도란} boxSize="1rem" />
          </Box>
          <NavItem style={{ margin: "0", fontWeight: "550" }}>
            햄찌님 환영해요
          </NavItem>
        </Box>
      </Navdiv>
    </>
  );
}

export default Nav;

const Navdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 1rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
