"use client";

import { Flex, Link } from "@chakra-ui/react";
import { FC } from "react";

const Menu: FC = () => {
  return (
    <Flex flex={1} justifyContent="space-evenly">
      <Link color="grey">Home</Link>
      <Link color="grey">Top accounts</Link>
      <Link color="grey">Top Trending</Link>
      <Link color="grey">Defence</Link>
    </Flex>
  );
};

export default Menu;
