import { AuthModalState } from "@/state/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";

type Props = {};

const AuthInputs = (props: Props) => {
  const { view } = useRecoilValue(AuthModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {view === "login" && <Login />}
      {view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
