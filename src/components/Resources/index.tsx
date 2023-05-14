"use client";

import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Resources: FC = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Text fontSize="24px" lineHeight="34px" fontWeight="bold">
        Resources
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        About Us
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Blog
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Guides
      </Text>
      <Text lineHeight="18px" fontWeight="medium">
        Career opportunities
      </Text>
    </Flex>
  );
};

export default Resources;
