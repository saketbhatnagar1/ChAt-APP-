import React, { useState } from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState();
  const [show, setShow] = useState(false);
  const [confirmShow, setconfirmShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  function handleClickconfirm() {
    setconfirmShow(!confirmShow);
  }
  const postDetails = (pics) => {};
  const submithandler = () => {};

  return (
    <div>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="5px"
        align="stretch"
      >
        <FormControl id="first-name " isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="USER-NAME"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel isRequired>Email</FormLabel>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPasswrod(e.target.value)}
            ></Input>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="confirmpassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={confirmShow ? "text" : "password"}
              placeholder="Confirm your password"
            ></Input>
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickconfirm}>
                {show ? "hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="pic">
          <FormLabel>UPLOAD YOUR PICTURE ?</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => postDetails(e.target.value[0])}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submithandler}
        >
          Sign-Up
        </Button>
      </VStack>
    </div>
  );
};

export default Signup;
