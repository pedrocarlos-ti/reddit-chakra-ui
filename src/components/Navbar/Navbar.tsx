import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex bg="white" p={3} h={16}>
      <Flex align="center">
        <Image
          src="/images/reddit.svg"
          alt="logo"
          height={30}
          display={{ base: "none", lg: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
