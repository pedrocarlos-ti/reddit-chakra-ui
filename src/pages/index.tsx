import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <Flex>
      <Text>Home Page</Text>
      <Button>Click Me</Button>
    </Flex>
  );
}
