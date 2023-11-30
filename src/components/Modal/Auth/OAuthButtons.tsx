import { Button, Flex, Image } from "@chakra-ui/react";

type Props = {};

const OAuthButtons = (props: Props) => {
  return (
    <Flex direction="column" width="100%" mb={4} gap={2}>
      <Button variant="oauth">
        <Image alt="google logo" src="/images/google.svg" h={6} mr={2} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
    </Flex>
  );
};

export default OAuthButtons;
