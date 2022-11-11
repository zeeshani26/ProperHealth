import React from "react";
import { Box, Button, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MobileApp() {
  return (
    <Flex margin="auto" mt="30px" justifyContent="center" ml="70px">
      <Box width="30%">
        <Image
          loading="lazy"
          width="95%"
          src="https://i.ibb.co/N3cC995/cronometer-hero-graphic.png"
          alt="ChronometerAppGraphic"
        />
      </Box>
      <Box border="0px solid red" width="40%" marginLeft="45px">
        <Box color="#4F4F52" textAlign="left" mt="32px">
          <Heading size="2xl">Eat smarter.</Heading>
          <Heading size="2xl">Live better.</Heading>
        </Box>
        <Box
          border="0px solid blue"
          width="90%"
          color="#4F4F52"
          marginTop="25px"
        >
          <Text textAlign="left" fontSize="3xl">
            {/* Passed as array to make it responsice to screen change */}
            Track your calories, exercise, biometrics and health data.
          </Text>
          <Box
            marginTop="42px"
            width="280px"
            borderRadius="10px"
            color="white"
            backgroundColor="#FF763F"
            fontSize="lg"
            fontWeight="600"
            pt="15px"
            pb="15px"
            _hover={{ boxShadow: "2xl", cursor: "pointer" }}
          >
            Sign Up - It's Free!
          </Box>
          <Box textAlign="left" mt="42px" color="#4F4F52">
            <Text fontSize="xl">
              Already have an account?
              <Button
                backgroundColor="white"
                fontSize="lg"
                _hover={{ color: "#FF763F", textDecoration: "underline" }}
                p="0 4px"
                mt="-5px"
                border="0px solid red"
              >
                <Link to="/login">
                  <u>Log in.</u>
                </Link>
              </Button>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
