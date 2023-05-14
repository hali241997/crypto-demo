"use client";

import LogoIcon from "@/icons/LogoIcon";
import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const AppLinks: FC = () => {
  return (
    <Box width="280px">
      <LogoIcon />
      <Text color="purple" fontStyle="italic" mt="14px">
        Welcome to the best web3 tracker on the internet
      </Text>
    </Box>
  );
};

export default AppLinks;
