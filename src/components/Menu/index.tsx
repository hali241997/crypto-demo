"use client";

import { Flex, Link } from "@chakra-ui/react";
import { FC } from "react";

const Menu: FC = () => {
  return (
    <Flex flex={1} justifyContent="space-evenly">
      <Link color="#9A99AD">Home</Link>
      <Link color="#9A99AD">Top accounts</Link>
      <Link color="#9A99AD">Top Trending</Link>
      <Link color="#9A99AD">Defence</Link>
    </Flex>
  );
};

export default Menu;
