import { AuthModalState } from "@/state/authModalAtom";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

type Props = {};

const AuthModal = (props: Props) => {
  const [{ isOpen, view }, setModalState] = useRecoilState(AuthModalState);

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          {view === "login" && "Log In"}
          {view === "signup" && "Sign up"}
          {view === "resetPassword" && "Reset Password"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pb={6}
        >
          <Flex direction="column" justify="center" align="center" width="70%">
            <OAuthButtons />
            <Text color="gray.500" fontWeight={700}>
              OR
            </Text>
            <AuthInputs />
            {/* <ResetPassword /> */}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
