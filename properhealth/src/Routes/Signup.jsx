import React from "react";
import {
  Box,
  Button,
  Image,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myicon from "../Data/Proper_icon.jpg";
import { AddUser } from "../api/api";
import { AppContext } from "../Context/AppContextProvider";
import { useContext } from "react";

export default function Signup() {
  let navigate = useNavigate();
  const { authState, handleSign } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(authState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await AddUser(user);
    console.log(res);
    alert("SIGN UP SUCCESSFUL");
    handleSign(user);
    navigate("/login");
  };

  return (
    <Box w={"100%"} mt="5">
      <Box w={"40%"} m="auto" boxShadow="2xl" p="30px" mb="100px">
        <Box display={"flex"} justifyContent={"center"}>
          <Image w={"328px"} src={myicon} />
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack gap={"10px"} w={"100%"} m={"auto"}>
            <Input
              type="email"
              name="email"
              required
              defaultValue={email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              height={"45px"}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              defaultValue={password}
              onChange={handleChange}
              height={"45px"}
            />

            <Button
              type={"submit"}
              w={"100%"}
              color={"white"}
              fontSize={"xl"}
              bg={"#67AC5B"}
              _hover={{
                bg: "green.600",
              }}
              height="45px"
            >
              Create Account
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
