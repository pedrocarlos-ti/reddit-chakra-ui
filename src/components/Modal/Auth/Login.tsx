import { AuthModalState } from "@/state/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Login = (props: Props) => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSignUpClick = () => {
    setAuthModalState((prev) => ({ ...prev, view: "signup" }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        onChange={onChange}
        fontSize="10pt"
        name="email"
        placeholder="Type your email"
        type="email"
        mb={2}
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none !important",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />

      <Input
        required
        fontSize="10pt"
        name="password"
        placeholder="Type your password"
        type="password"
        mb={2}
        onChange={onChange}
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none !important",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Button width="100%" mt={2} mb={4} type="submit">
        Log In
      </Button>

      <Flex fontSize="9pt" justify="center" gap={2}>
        <Text>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={onSignUpClick}
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
