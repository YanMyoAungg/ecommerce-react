import { Box, Center, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import useFetchProducts from "../hooks/useFetchProducts";
import Product from "../components/Product";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const { products, isLoading } = useFetchProducts();

  return (
    <Flex wrap="wrap" justify="center" gap={4} p={10}>
      {isLoading ? (
        <Center>
          <VStack>
            <Spinner
              size="xl"
              color={"black .500"}
              css={{ "--spinner-track-color": "colors.red.500" }}
            />
            <Text color={"black.500"}>Loading...</Text>
          </VStack>
        </Center>
      ) : (
        products?.map((product) => (
          <Box
            key={product.id}
            flexBasis={{ base: "100%", md: "48%", lg: "20%" }}
            minHeight={"200px"}
          >
            <Product product={product} detail={false} />
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Home;
