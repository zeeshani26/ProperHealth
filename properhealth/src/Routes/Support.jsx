import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Input,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";

export const Support = () => {
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
      <Heading mb={"80px"} color={"#404040"} mt="100px">
        Enter Details Here...
      </Heading>
      <Stack m="auto" w="60%" spacing={3} pb="100px">
        <Input variant="filled" placeholder="Enter Image URL" />
        <Input variant="filled" placeholder="Enter Title" />
        <Input
          variant="filled"
          placeholder="Enter Date"
          type={"datetime-local"}
        />
        <Input variant="filled" placeholder="Enter Description" />
        <Textarea
          size="md"
          variant="filled"
          placeholder="Enter the Article Data"
        />
      </Stack>
    </Box>
  );
};
