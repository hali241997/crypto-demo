"use client";

import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Support: FC = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Text color="white" fontSize="24px" lineHeight="34px" fontWeight="bold">
        Support
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Contact
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Pricing
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Privacy
      </Text>
      <Text color="white" lineHeight="18px" fontWeight="medium">
        Terms
      </Text>
    </Flex>
  );
};

export default Support;
