import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import firstImage from "../Data/home-page-1.png";

export default function HomePage() {
   return (
    <>
    <Box>
        <Image w="100%" src={firstImage} alt="firstImage" />
    </Box>
    </>
   )
}
