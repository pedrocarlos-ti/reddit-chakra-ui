import { AuthModalState } from "@/state/authModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

type Props = {};

const AuthButtons = (props: Props) => {
  const setAuthModalState = useSetRecoilState(AuthModalState);

  return (
    <>
      <Button
        variant="outline"
        h={8}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", sm: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ isOpen: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        h={8}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", sm: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ isOpen: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
