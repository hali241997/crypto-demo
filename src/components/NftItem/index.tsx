"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NftItemProps } from "./types";

const NftItem: FC<NftItemProps> = ({
  name,
  from,
  amount,
  amountPercent,
  selected,
}) => {
  return (
    <Box mt="20px" mb="20px">
      <Flex
        bgColor="purpleRgb"
        borderRadius="100px"
        backdropFilter="blur(5px)"
        p="6px 27px 7px 8px"
      >
        <Flex flex={1} alignItems="center">
          <Image
            src="/images/nft-item.png"
            alt="nft"
            width="74px"
            height="74px"
            mr="14px"
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
                fontSize="20px"
                lineHeight="30px"
                fontWeight="bold"
                color="purpleDarker"
                mr="12px"
              >
                {amount}
              </Text>
              <Text
                fontFamily={josefin.style.fontFamily}
                fontSize="16px"
                lineHeight="30px"
                fontWeight="bold"
                color="red"
                mr="12px"
              >
                {amountPercent}
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
            NFTs | 2976 BAYC
          </Text>

          <Flex alignItems="center">
            <Text
              fontFamily={josefin.style.fontFamily}
              fontSize="24px"
              lineHeight="30px"
              color="purpleDarker"
              mr="13px"
            >
              $ 50 000 000
            </Text>

            <Image src="/images/arrow-right.png" alt="arrow-right" />
          </Flex>
        </Flex>
      </Flex>

      {selected && <Box mt="20px" ml="16px" border="1px solid #444444" />}
    </Box>
  );
};

export default NftItem;
