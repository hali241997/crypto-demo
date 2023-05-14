"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Features: FC = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Text fontSize="24px" lineHeight="34px" fontWeight="bold">
        Features
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Track Wallets
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Track NFTs
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Track DAO/DeFi
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Follow Traders
      </Text>
    </Flex>
  );
};

export default Features;
