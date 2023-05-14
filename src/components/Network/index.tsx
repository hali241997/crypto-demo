"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NetworkProps } from "./types";

const Network: FC<NetworkProps> = ({ name, image, bgColor = "purpleRgb" }) => {
  return (
    <Flex
      width="145px"
      height="42px"
      bgColor={bgColor}
      backdropFilter="blur(5px)"
      borderRadius="100px"
      alignItems="center"
      pl="6px"
      pr="6px"
      gap="12px"
    >
      <Box bgColor="black" width="32px" height="32px" borderRadius="50%">
        <Image src={image} alt={name} width="32px" height="32px" />
      </Box>

      <Text
        fontFamily={josefin.style.fontFamily}
        fontWeight="bold"
        fontSize="12px"
        lineHeight="30px"
      >
        {name}
      </Text>
    </Flex>
  );
};

export default Network;
