import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Heading,
  InputGroup,
  Input,
  VStack,
  InputRightAddon,
} from "@chakra-ui/react";

export const Blog = () => {
  return (
    <Box>
      <Box
        textAlign="center"
        lineHeight={"4rem"}
        color="white"
        p="80px 0px 160px"
        w="100%"
        backgroundImage={`linear-gradient(80deg,#ff763f 0%,#ffb56b 100%)`}
        borderBottomRightRadius="30%"
        borderBottomLeftRadius="30%"
      >
        <Heading fontSize="49.32px" lineHeight="61.65px">
          The Proper Health Blog
        </Heading>
        <Text mt="10px" fontSize="25.38px" lineHeight="38.07px">
          App Updates, Nutrition Tips & Inspiration
        </Text>
      </Box>

      <Flex
        p="10px"
        border="0px solid black"
        w="100%"
        m="100px auto"
        flexDirection="column"
        bg="#F8F8F8"
      >
        <Box paddng="10" pt="30px" textAlign="center" mb="25px">
          <Heading fontSize="45px" color="#404040">
            Browse the Archives
          </Heading>
        </Box>
        <Flex
          m="30px auto"
          w="80%"
          justifyContent="space-evenly"
          color="#FE753E"
          fontSize="21px"
        >
          {/* ADD FILTER HERE--------------------------------------------------------------------------------------------- */}
          <Text>Nutrition</Text>
          <Text>Fitness</Text>
          <Text>Features</Text>
          <Text>Recipe</Text>
          <Text>App Updates</Text>
          {/* ------------------------------------------------------------------------------------------------------------------ */}
        </Flex>
        <Box mt="20px" mb="20px">
          <InputGroup m="auto" w="75%" size="lg" padding="30px 0px 80px 0px">
            <Input
              bg="#FFF"
              focusBorderColor="none"
              type="text"
              placeholder="Search Blog Posts"
              _placeholder={{ opacity: 1, color: "#80808C" }}
              boxShadow="xl"
            />
          </InputGroup>
        </Box>
      </Flex>
      {/* map blog article component here */}
    </Box>
  );
};
