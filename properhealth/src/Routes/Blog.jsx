import { Box, Flex, Text, Heading, InputGroup, Input } from "@chakra-ui/react";
import { BlogList } from "../Components/BlogList";
import { Search2Icon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import MobileApp from "../Components/MobileApp";
import Footer from "../Components/Footer";

export const Blog = () => {
  const [type, setType] = useState(null);

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
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => setType("Nutrition")}
          >
            Nutrition
          </Text>
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => setType("Fitness")}
          >
            Fitness
          </Text>
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => setType("Features")}
          >
            Features
          </Text>
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => setType("Recipe")}
          >
            Recipe
          </Text>
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => setType(null)}
          >
            All
          </Text>
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
            <Search2Icon
              alignSelf={"center"}
              cursor="pointer"
              color="gray.500"
              ml={"5px"}
            ></Search2Icon>
          </InputGroup>
        </Box>
      </Flex>
      {/* map blog article component here */}
      <BlogList type={type} />
      <br />
      <MobileApp />
      <br/><br/>
      <Footer />
    </Box>
  );
};
