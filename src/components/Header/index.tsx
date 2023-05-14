"use client";

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Menu from "../Menu";
import Navigation from "../Navigation";
import LogoIcon from "@/icons/LogoIcon";

const Header: FC = () => {
  return (
    <Flex
      p="20px 99px 23px 108px"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoIcon />
      <Menu />
      <Navigation />
    </Flex>
  );
};

export default Header;
