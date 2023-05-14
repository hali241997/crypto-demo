"use client";

import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AssetFiltersNameDropdownProps } from "./types";

const AssetFiltersNameDropdown: FC<AssetFiltersNameDropdownProps> = ({
  name,
}) => {
  return (
    <Flex
      border="1px solid #444444"
      bgColor="rgba(0, 0, 0, 0.35)"
      backdropFilter="blur(5px)"
      p="9px 11px 6px 16px"
      borderRadius="40px"
    >
      <Text fontWeight="semibold" fontSize="11px" lineHeight="13px" mr="3px">
        {name}
      </Text>

      <Image
        src="/images/arrow-down.png"
        alt="arrow-down"
        width="15px"
        height="15px"
      />
    </Flex>
  );
};

export default AssetFiltersNameDropdown;
