"use client";

import { josefin } from "@/utils/font";
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const ProfileBreakdown: FC = () => {
  return (
    <Flex
      bgColor="purpleRgb"
      p="15px 52px 13px 22px"
      width="440px"
      height="180px"
      borderRadius="30px"
      alignSelf="center"
    >
      <Text
        fontFamily={josefin.style.fontFamily}
        fontWeight="medium"
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="0.02em"
        color="purpleBold"
      >
        Portfolio breakdown
      </Text>
    </Flex>
  );
};

export default ProfileBreakdown;
