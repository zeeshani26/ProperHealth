import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getData } from "../api/api";
import BlogIcon from "./BlogIcon";
import { Link } from "react-router-dom";

export const BlogList = ({ type }) => {
  const [data, setData] = useState([]);
  const [order, setorder] = useState("desc");
  const [orderText, setorderText] = useState("Arrange By Oldest");

  useEffect(() => {
    getData({ sort: "date", order: order, type: type }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [order, type]);
  const toggleOrder = () => {
    if (order === "desc") {
      setorder("asc");
      setorderText("Arrange By Latest");
    } else if (order === "asc") {
      setorder("desc");
      setorderText("Arrange By Oldest");
    }
  };
  return (
    <Box>
      <Button mb={"50px"} onClick={toggleOrder}>
        {orderText}
      </Button>
      <Flex
        m="auto"
        gap={"10%"}
        w={"75%"}
        justifyContent="space-evenly"
        wrap={"wrap"}
      >
        {data.map((el) => (
          <BlogIcon
            key={el.id}
            title={el.title}
            id={el.id}
            data={el.data}
            date={el.date}
            desc={el.desc}
            img={el.img}
            type={el.type}
          />
        ))}
      </Flex>
    </Box>
  );
};
