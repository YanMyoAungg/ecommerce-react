import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const Template = () => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Template;
