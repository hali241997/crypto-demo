"use client";

import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Resources: FC = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Text color="white" fontSize="24px" lineHeight="34px" fontWeight="bold">
        Resources
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        About Us
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Blog
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Guides
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Career opportunities
      </Text>
    </Flex>
  );
};

export default Resources;
