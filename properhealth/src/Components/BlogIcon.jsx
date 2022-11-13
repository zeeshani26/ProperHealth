import React from "react";
import { Box, Heading, VStack, Image, Text, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddArticle } from "../api/api";

function BlogIcon({ date, desc, id, title, img, type }) {
  return (
    <VStack
      p={4}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      textAlign="left"
      justify={"space-around"}
      w="40%"
      h="25%"
      mb="50px"
      border={"0px solid green"}
      display="flex"
    >
      <Link to={`/blog/${id}`}>
        <Box w="100%">
          <Tag position={"absolute"} zIndex="1">
            {type}
          </Tag>
          <Image
            zIndex={"0"}
            w="100%"
            position={"relative"}
            height={"400px"}
            borderRadius="20px"
            src={img}
          ></Image>
        </Box>

        <Heading textAlign="start" color={"gray.600"} mb="10px">
          {title}
        </Heading>
        <Text textAlign="start" fontSize={14} color="gray.500" mb="10px">
          {date}
        </Text>
        <Box>
          <Text fontWeight={"600"} color={"gray.700"} mb="10px">
            {desc}
          </Text>
          <Text fontWeight={700}>Read Article..</Text>
        </Box>
      </Link>
    </VStack>
  );
}

export default BlogIcon;
