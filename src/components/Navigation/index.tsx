"use client";

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import SearchBar from "../SearchBar";
import AccountButton from "../AccountButton";
import BurgerIcon from "@/icons/BurgerIcon";

const Navigation: FC = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="space-evenly">
      <SearchBar />
      <AccountButton />
      <BurgerIcon />
    </Flex>
  );
};

export default Navigation;
