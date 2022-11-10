import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import icon from "../Data/Proper_icon.jpg";
const Navbar = () => {
  return (
    <Box border="0px" width="90%" margin="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Box marginLeft="80px" border="0px">
          <Link to="/">
            <Image height="180px" width="180px" src={icon}></Image>
          </Link>
        </Box>
        <Box border="0px" width="52%" marginRight="30px ">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                Products
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                Support
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/blog">Blog</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                Forum
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/about">About</Link>
              </Text>
            </Box>
            <Box boxShadow="xl">
              <Button
                width="120px"
                border="1.5px solid #FF763F"
                color="#FF763F"
                backgroundColor="white"
                fontSize="lg"
                fontWeight="600"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/login">Login</Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
