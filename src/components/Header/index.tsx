"use client";

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import Navigation from "../Navigation";

const Header: FC = () => {
  return (
    <Flex
      p="20px 99px 23px 108px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />
      <Menu />
      <Navigation />
    </Flex>
  );
};

export default Header;
