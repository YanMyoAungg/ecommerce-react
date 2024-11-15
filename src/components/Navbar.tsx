import { Box, Container, Flex, Image, Input, Link } from "@chakra-ui/react";
import {
  BookmarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={"black"}>
      <Container>
        <Flex
          h={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"16"}
        >
          <Box>
            <NavLink to="/">
              <Image
                src="../src/assets/nav-logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </NavLink>
          </Box>
          <Box flex={1} display={{ base: "none", md: "block" }}>
            <Input variant={"subtle"} placeholder="Search Products"></Input>
          </Box>

          <Flex gap={4}>
            <Link color={"white"}>
              <UserIcon width={20} height={20} />
            </Link>
            <Link color={"white"}>
              <ShoppingCartIcon width={20} height={20} />
            </Link>
            <Link color={"white"}>
              <BookmarkIcon width={20} height={20} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
