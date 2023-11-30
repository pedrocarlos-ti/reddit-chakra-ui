import React from "react";
import Navbar from "../Navbar/Navbar";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
