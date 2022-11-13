import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { AddBlog } from "../Components/AddBlog";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Navigate } from "react-router-dom";

export const Support = () => {
  const { authState } = useContext(AppContext);
  const { isAuth } = authState;

  if (!isAuth) {
    alert("Not Logged In");
    return <Navigate to="/login" />;
  }
  return (
    <Box>
      <Box
        textAlign="center"
        lineHeight={"4rem"}
        color="white"
        p="60px 0px 90px"
        w="100%"
        backgroundImage={`linear-gradient(80deg,#ff763f 0%,#ffb56b 100%)`}
        borderBottomRightRadius="30%"
        borderBottomLeftRadius="30%"
      >
        <Heading fontSize="49.32px" lineHeight="61.65px">
          Proper Health
        </Heading>
        <Text mt="20px" fontSize="25.38px" lineHeight="38.07px">
          Admin Access
        </Text>
      </Box>
      <AddBlog />
    </Box>
  );
};
