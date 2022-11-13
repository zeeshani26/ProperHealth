import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import icon from "../Data/Proper_icon.jpg";

export default function Footer() {
  return (
    <Box bgColor="#4F4E53">
      <Box w="80%" m="auto" paddingTop="70px">
        <Box>
          <Box w="20%" margin="auto">
            <Flex justifyContent="space-between">
              <Box h="40px" cursor="pointer">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"
                  alt="instagram"
                  h="100%"
                />
              </Box>
              <Box h="40px" cursor="pointer">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"
                  alt="facebook"
                  h="100%"
                />
              </Box>
              <Box h="40px" cursor="pointer">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"
                  alt="twitter"
                  h="100%"
                />
              </Box>
              <Box h="40px" cursor="pointer">
                <Image
                  src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png"
                  alt="youtube"
                  h="100%"
                />
              </Box>
            </Flex>
          </Box>
          <Flex m="auto" w="30%" justifyContent="center" mt="32px" gap="20px">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
              alt="ios"
              cursor="pointer"
              width="40%"
            />
            <Image
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
              alt="android"
              cursor="pointer"
              w="40%"
            />
          </Flex>
          <hr
            style={{
              backgroundColor: "white",
              height: "0.01px",
              width: "100%",
              margin: "auto",
              marginTop: "50px",
              marginBottom: "60px",
            }}
          />
        </Box>
        <Box>
          <Flex>
            <Box width="24%">
              <Link to="/">
                <Image
                  src={icon}
                  alt="companyImg"
                  w="50%"
                  margin="auto"
                  borderRadius="50px"
                />
              </Link>
            </Box>
            <Box w="24%" color="white" textAlign="left">
              <Heading size="md">Cronometer</Heading>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                For Individuals
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                For Professionals
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Privacy
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Terms
              </Text>
            </Box>
            <Box w="24%" color="white" textAlign="left">
              <Heading size="md">The Company</Heading>
              <Text fontSize="16.5px" mt="15px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                <Link to="/about">About Us</Link>
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Crono Blog
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Crono Forums
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Jobs
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Support
              </Text>
            </Box>
            <Box w="24%" color="white" textAlign="left">
              <Heading size="md">Partners & Affiliates</Heading>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Affilate Program
              </Text>
              <Text mt="15px" fontSize="16.5px" _hover={{ color: "#FF763F", cursor: "pointer" }}>
                Media Kit
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box color="white" mt="35px" fontSize="19px" pb="55px" >
          <Text>Copyright © 2011-2022</Text>
          <Text>All rights reserved</Text>
        </Box>
      </Box>
    </Box>
  );
}
