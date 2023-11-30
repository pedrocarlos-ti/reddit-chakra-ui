import { auth } from "@/firebase/app";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { AuthModalState } from "@/state/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type Props = {};

const SignUp = (props: Props) => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorText, setErrorText] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorText) setErrorText("");

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setErrorText("Password does not match");
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
  };

  const onLogInClick = () => {
    setAuthModalState((prev) => ({ ...prev, view: "login" }));
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
      <Input
        required
        fontSize="10pt"
        name="confirmPassword"
        placeholder="Confirm your password"
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

      <Button isLoading={loading} width="100%" mt={2} mb={4} type="submit">
        Sign Up
      </Button>

      <Text color="red.500" fontSize="9pt" mb={2} textAlign="center">
        {errorText ||
          FIREBASE_ERRORS[error?.code as keyof typeof FIREBASE_ERRORS]}
      </Text>

      <Flex fontSize="9pt" justify="center" gap={2}>
        <Text>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={onLogInClick}
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
