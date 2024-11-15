import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";

import { useParams } from "react-router";
import useFetchProductDetail from "../hooks/useFetchProductDetail";
import Loading from "../components/Loading";
import { StepperInput } from "@/components/ui/stepper-input";
import { Field } from "@/components/ui/field";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProductDetail(Number(id));
  console.log(product);

  return (
    <Box p={10}>
      {isLoading ? (
        <Loading />
      ) : (
        product && (
          <Center p={4}>
            <Card.Root
              flexDirection="row"
              overflow="hidden"
              maxW="xl"
              bg={"khaki"}
            >
              <Image
                objectFit="cover"
                maxW="200px"
                src={product.image}
                alt="product-image"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">{product.title}</Card.Title>
                  <Card.Description textAlign={"justify"}>
                    {product.description}
                  </Card.Description>
                  <HStack mt="4">
                    <Badge variant={"outline"} bg={"yellow.300"}>
                      {product.category}
                    </Badge>
                  </HStack>
                </Card.Body>
                <Card.Footer>
                  <HStack>
                    {/* <Field label="Quantity"> */}
                    <StepperInput min={1} defaultValue={"1"} bg={"white"} />
                    {/* </Field> */}
                    <Button>Add to cart</Button>
                  </HStack>
                </Card.Footer>
              </Box>
            </Card.Root>
          </Center>
        )
      )}
    </Box>
  );
};

export default ProductDetail;
