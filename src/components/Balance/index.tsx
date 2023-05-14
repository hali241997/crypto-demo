"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const Balance: FC = () => {
  return (
    <Box mb="63px">
      <Text
        fontFamily={josefin.style.fontFamily}
        fontWeight="medium"
        fontSize="15px"
        lineHeight="70px"
        color="rgba(255, 255, 255, 0.65)"
      >
        Balance
      </Text>

      <Flex>
        <Flex
          width="256px"
          height="53px"
          alignItems="center"
          borderRadius="100px"
          bgColor="purpleRgb"
          backdropFilter="5px"
          p="8px"
          gap="20px"
        >
          <Flex
            width="41px"
            height="41px"
            border="2px solid rgb(83, 30, 135)"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/wallet.png"
              alt="wallet"
              width="22px"
              height="24px"
            />
          </Flex>

          <Text
            fontWeight="medium"
            fontSize="24px"
            lineHeight="24px"
            letterSpacing="0.02em"
            color="greyLight"
          >
            $ 560 900 500
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          ml="10px"
        >
          <Image
            src="/images/arrow-up-green.png"
            alt="arrow"
            width="12px"
            height="12px"
          />

          <Text
            color="green"
            fontSize="15px"
            lineHeight="24px"
            fontWeight="bold"
            letterSpacing="0.02em"
          >
            6%{" "}
            <Text as="span" fontSize="10px">
              YTB
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Balance;
