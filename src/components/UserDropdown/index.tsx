"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const UserDropdown: FC = () => {
  return (
    <Flex
      width="225px"
      height="65px"
      p="6px"
      bgColor="purpleRgb"
      borderRadius="100px"
      backdropFilter="blur(5px)"
    >
      <Image
        src="/images/profile.png"
        alt="profile"
        width="54px"
        height="54px"
        mr="18px"
      />

      <Box mr="14px">
        <Text
          fontFamily={josefin.style.fontFamily}
          fontWeight="bold"
          fontSize="18px"
          lineHeight="30px"
        >
          cryptoguy
        </Text>

        <Text
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.02em"
          color="grey"
        >
          0x7132...084
        </Text>
      </Box>

      <Flex alignItems="flex-end">
        <Image
          src="/images/arrow-down.png"
          alt="arrow-down"
          width="20px"
          height="20px"
        />
      </Flex>
    </Flex>
  );
};

export default UserDropdown;
