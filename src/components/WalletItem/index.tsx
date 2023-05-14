"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { WalletItemProps } from "./types";

const WalletItem: FC<WalletItemProps> = ({
  name,
  from,
  amount,
  percent,
  selected,
}) => {
  return (
    <Box mt="20px" mb="20px">
      <Flex
        bgColor={selected ? "purpleRgb" : "rgba(42, 30, 54, 0.4)"}
        borderRadius="100px"
        backdropFilter="blur(5px)"
        p="6px 27px 7px 8px"
      >
        <Flex flex={1} alignItems="center">
          <Image
            src="/images/binance.png"
            alt="wallet"
            width="74px"
            height="74px"
            mr="18px"
          />

          <Box>
            <Text
              fontFamily={josefin.style.fontFamily}
              fontWeight="bold"
              fontSize="24px"
              lineHeight="30px"
            >
              {name} -{" "}
              <Text as="span" fontWeight="normal">
                {from}
              </Text>
            </Text>

            <Flex mt="4px">
              <Text
                fontFamily={josefin.style.fontFamily}
                fontWeight="bold"
                fontSize="20px"
                lineHeight="30px"
                color="purpleDarker"
              >
                {amount}
              </Text>

              <Text
                fontFamily={josefin.style.fontFamily}
                fontWeight="bold"
                fontSize="20px"
                lineHeight="30px"
                color="green"
                ml="16px"
              >
                {percent}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex flex={1} alignItems="center" justifyContent="space-between">
          <Text
            fontFamily={josefin.style.fontFamily}
            fontSize="20px"
            lineHeight="30px"
            color="#C68CFF57"
          >
            Token | 889 000 BNB
          </Text>

          <Flex alignItems="center">
            <Text
              fontFamily={josefin.style.fontFamily}
              fontSize="24px"
              lineHeight="30px"
              color="purpleDarker"
              mr="13px"
            >
              $ 220 000 500
            </Text>

            <Image src="/images/arrow-right.png" alt="arrow-right" />
          </Flex>
        </Flex>
      </Flex>

      {selected && <Box mt="20px" ml="16px" border="1px solid #444444" />}
    </Box>
  );
};

export default WalletItem;
