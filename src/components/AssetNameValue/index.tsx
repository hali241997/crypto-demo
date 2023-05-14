"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AssetNameValueProps } from "./types";

const AssetNameValue: FC<AssetNameValueProps> = ({ name, value }) => {
  return (
    <Box pl="16px">
      <Flex justifyContent="space-between" mb="11px">
        <Text
          fontFamily={josefin.style.fontFamily}
          fontWeight="bold"
          fontSize="24px"
          lineHeight="30px"
        >
          {name}
        </Text>

        <Text
          fontFamily={josefin.style.fontFamily}
          fontWeight="bold"
          fontSize="32px"
          lineHeight="30px"
        >
          {value}
        </Text>
      </Flex>

      <Box border="1px solid #444444" />
    </Box>
  );
};

export default AssetNameValue;
