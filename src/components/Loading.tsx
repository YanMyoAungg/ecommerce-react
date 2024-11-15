import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
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
  );
};

export default Loading;
