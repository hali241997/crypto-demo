"use client";

import SearchIcon from "@/icons/SearchIcon";
import { Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <Flex
      alignItems="center"
      width="200px"
      height="48px"
      border="1.5px solid #FFF"
      borderRadius="56px"
      p="8px 10px"
    >
      <SearchIcon />

      <Input
        placeholder="Search"
        border="0"
        _placeholder={{ textAlign: "center" }}
      />
    </Flex>
  );
};

export default SearchBar;
