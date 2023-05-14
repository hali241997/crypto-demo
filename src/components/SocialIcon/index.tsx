"use client";

import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { SocialIconProps } from "./types";

const SocialIcon: FC<SocialIconProps> = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      width="30px"
      height="30px"
      borderRadius="50%"
      bgColor="purpleDark"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};

export default SocialIcon;
