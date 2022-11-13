import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../api/api";
import React from "react";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

const SinglePage = () => {
  const { article } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getSingleData(article).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
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
          {data.title}
        </Heading>
      </Box>
      <Text color={"gray.300"}>{data.date}</Text>
      <Box m="auto">
        <Heading p="50px" color={"gray.600"}>
          {data.desc}
        </Heading>
        <Image m="auto" w="20%" src={data.img}></Image>
        <Box m="auto" width={"70%"} mt="70px">
          <Text align={"start"} font="#2D2D2D" fontSize="18px" lineHeight="27px">
            {data.data}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePage;
