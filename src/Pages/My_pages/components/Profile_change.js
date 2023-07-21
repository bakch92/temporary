import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Image,
  Button,
  FormControl,
  Stack,
  Select,
} from "@chakra-ui/react";
import 야도란 from "../../../Asset/image/야도란.PNG";
import styled from "styled-components";

function Profile_change() {
  const [profileImage, setProfileImage] = useState(야도란); // 기본 프로필 이미지 설정

  const handleProfileChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target.result;
          setProfileImage(imageUrl); // 프로필 이미지 업데이트
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <>
      <Stack direction="column" height={"90vh"}>
        <Text
          width={"100%"}
          mt={"4rem"}
          mb={".5rem"}
          ml={"3rem"}
          fontSize="2rem"
          fontWeight={"900"}
        >
          개인 정보 변경
        </Text>
        <Stack direction="row">
          <Propileimgdiv>
            <Box
              display="flex"
              bg="#efefef"
              borderRadius={"90%"}
              boxSize="7rem"
              alignItems={"center"}
              justifyContent={"center"}
              mx={"2rem"}
              mb={"1rem"}
            >
              <Image src={profileImage} boxSize="5rem" />
            </Box>
            <Button
              fontSize="1rem"
              bg="white"
              width={"6.6rem"}
              height={"2.6rem"}
              borderRadius={"5px"}
              borderWidth={"1px"}
              onClick={handleProfileChange}
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
              _hover={{
                backgroundColor: "#f2f2f2",
              }}
            >
              프로필 변경
            </Button>
          </Propileimgdiv>
          <Propilediv>
            <PropileItem style={{ marginTop: "5.5rem" }}>
              <textdiv>이름</textdiv>
              <Text fontSize="xl">김동수</Text>
            </PropileItem>
            <PropileItem>
              <textdiv>닉네임</textdiv>
              <Stack direction="row">
                <FormControl>
                  <Input
                    type="text"
                    width={"20rem"}
                    height={"3rem"}
                    borderRadius={"5px"}
                    borderWidth={"1px"}
                  />
                </FormControl>
                <Button
                  colorScheme="blue"
                  bg={"#787878"}
                  width={"6rem"}
                  height={"3rem"}
                  borderRadius={"5px"}
                  borderWidth={"1px"}
                  _hover={{
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <Text color={"white"}>중복 확인</Text>
                </Button>
              </Stack>
            </PropileItem>
            <PropileItem>
              <textdiv>이메일</textdiv>
              <Stack direction="row">
                <Box
                  width="10rem"
                  height="3rem"
                  borderRadius="5px"
                  bg="#efefef"
                  border="1px solid gray"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="xl">jku2659</Text>
                </Box>
                <Text
                  fontSize="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  @
                </Text>
                <Box
                  width="10rem"
                  height="3rem"
                  bg="#efefef"
                  borderRadius="5px"
                  border="1px solid gray"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="xl">gmail.com</Text>
                </Box>
              </Stack>
            </PropileItem>

            <PropileItem>
              <textdiv>성별</textdiv>
              <Box bg="#efefef" borderRadius={"90%"} boxSize="1rem" />
              <Text fontSize="1rem" mx={"1rem"}>
                남자
              </Text>
              <Box bg="#efefef" borderRadius={"90%"} boxSize="1rem" />
              <Text fontSize="1rem" mx={"1rem"}>
                여자
              </Text>
            </PropileItem>
            <PropileItem>
              <textdiv>키워드</textdiv>
              <Select
                variant="outline"
                placeholder="키워드 선택"
                height={"3rem"}
                width="25rem"
                borderRadius={"5px"}
                icon={<></>}
              >
                <option value="option1">Option 1</option>
                <option value="option1">Option 1</option>
                <option value="option1">키워드 선택a 1</option>
              </Select>
            </PropileItem>
          </Propilediv>
        </Stack>
        <Stack alignItems={"center"} mt={"1.5rem"}>
          <Button
            colorScheme="blue"
            bg={"#222222"}
            width={"6rem"}
            height={"3rem"}
            borderRadius={"5px"}
            borderWidth={"1px"}
            _hover={{
              backgroundColor: "#f2f2f2",
            }}
          >
            <Text color={"white"}>확인</Text>
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default Profile_change;

const PropileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 3rem;
  width: 50vw;
  font-size: 1rem;
  font-weight: 500;

  textdiv {
    margin-right: 5rem;
    width: 5rem;
  }
`;

const Propilediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Propileimgdiv = styled(Propilediv)`
  padding-left: 4rem;
  padding-bottom: 10rem;
`;
