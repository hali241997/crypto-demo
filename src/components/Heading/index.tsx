"use client";

import { josefin } from "@/utils/font";
import { Heading as ChakraHeading, Flex } from "@chakra-ui/react";
import { FC } from "react";
import RefreshButton from "../RefreshButton";

const Heading: FC = () => {
  return (
    <Flex alignItems="center" gap="16px">
      <ChakraHeading
        fontFamily={josefin.style.fontFamily}
        fontWeight="extrabold"
        fontSize="48px"
        lineHeight="70px"
      >
        Portfolio
      </ChakraHeading>

      <RefreshButton />
    </Flex>
  );
};

export default Heading;
