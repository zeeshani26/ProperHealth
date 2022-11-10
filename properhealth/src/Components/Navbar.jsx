import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Navbar;
