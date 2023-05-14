"use client";

import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const RefreshButton: FC = () => {
  return (
    <Flex
      width="84px"
      height="31px"
      border="1.5px solid white"
      borderRadius="56px"
      alignItems="center"
      pl="5px"
      pr="5px"
      gap="7px"
    >
      <Image src="/images/clock.png" alt="clock" width="21px" height="21px" />

      <Text
        fontWeight="medium"
        fontSize="10px"
        lineHeight="24px"
        letterSpacing="0.02em"
        color="grey"
      >
        1min ago
      </Text>
    </Flex>
  );
};

export default RefreshButton;
