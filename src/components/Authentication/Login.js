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
import { React, useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const [password, setPasswrod] = useState("");

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
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submithandler}
      >
        Log in
      </Button>

      <Button width={"100%"} style={{ marginTop: 15 }} onClick={submithandler}>
        Forgot Password?
      </Button>
    </VStack>
  );
};

export default Login;
