import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <Flex flexGrow={1} mr={2} ml={2}>
      <InputGroup alignItems="center">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          fontSize="10pt"
          placeholder="Search Reddit"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none !important",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          size="sm"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
