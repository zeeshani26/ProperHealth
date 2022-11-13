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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddArticle } from "../api/api";

export const AddBlog = () => {
  const [formdata, setFormdata] = useState({
    img: "",
    title: "",
    desc: "",
    type: "",
    date: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    AddArticle(formdata);
  };

  return (
    <Box>
      <Heading mb={"80px"} color={"#404040"} mt="100px">
        Enter Details Here...
      </Heading>
      <Stack m="auto" w="60%" pb="100px">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel textAlign={"center"}>Image Address</FormLabel>
            <Input
              name="img"
              value={FormControl.img}
              required
              mt="10px"
              variant="filled"
              placeholder="Enter Image URL"
              onChange={handleChange}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign={"center"}>Title</FormLabel>
            <Input
              name="title"
              required
              mt="10px"
              variant="filled"
              placeholder="Enter Title"
              onChange={handleChange}
              value={FormControl.title}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign={"center"}>Date</FormLabel>
            <Input
              name="date"
              required
              variant="filled"
              placeholder="Enter Date"
              type="date"
              format="dd/MM/yyyy"
              mt="10px"
              onChange={handleChange}
              value={FormControl.date}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign={"center"}>Description</FormLabel>
            <Input
              name="desc"
              required
              mt="10px"
              variant="filled"
              placeholder="Enter Type"
              onChange={handleChange}
              value={FormControl.desc}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign={"center"}>Type</FormLabel>
            <Input
              name="type"
              required
              mt="10px"
              variant="filled"
              placeholder="Enter Type"
              onChange={handleChange}
              value={FormControl.type}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign={"center"}>Article Content</FormLabel>
            <Textarea
              name="data"
              required
              mt="10px"
              size="md"
              variant="filled"
              placeholder="Enter the Article Data"
              onChange={handleChange}
              value={FormControl.data}
              type="text"
            />
          </FormControl>
          <Button mt="10px" type="submit" value={FormControl.AddArticle}>
            {/* // Type= submit important */}
            ADD BLOG ARTICLE
          </Button>
        </form>
      </Stack>
    </Box>
  );
};
