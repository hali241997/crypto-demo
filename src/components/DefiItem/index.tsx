"use client";

import { josefin } from "@/utils/font";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { DefiItemProps } from "./types";

const DefiItem: FC<DefiItemProps> = ({
  name,
  from,
  cp,
  capital,
  capitalPercent,
  asset,
  assetPercent,
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
            src="/images/defi-item.png"
            alt="defi"
            width="99px"
            height="58px"
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

            <Text
              fontFamily={josefin.style.fontFamily}
              fontSize="20px"
              lineHeight="30px"
              color="purpleDarker"
              mt="4px"
            >
              CP: {cp}
            </Text>
          </Box>
        </Flex>

        <Flex flex={1} alignItems="center" justifyContent="space-between">
          <Box>
            <Flex>
              <Text
                fontFamily={josefin.style.fontFamily}
                fontSize="15px"
                lineHeight="30px"
                color="purpleDarker"
              >
                Capital Market Value: {capital}
              </Text>
              <Text
                fontFamily={josefin.style.fontFamily}
                fontSize="20px"
                lineHeight="30px"
                fontWeight="bold"
                color="green"
                ml="12px"
              >
                {capitalPercent}
              </Text>
            </Flex>

            <Flex>
              <Text
                fontFamily={josefin.style.fontFamily}
                fontSize="15px"
                lineHeight="30px"
                color="purpleDarker"
              >
                Asset Gains: {asset}
              </Text>
              <Text
                fontFamily={josefin.style.fontFamily}
                fontSize="20px"
                lineHeight="30px"
                fontWeight="bold"
                color="green"
                ml="12px"
              >
                {assetPercent}
              </Text>
            </Flex>
          </Box>

          <Flex alignItems="center">
            <Text
              fontFamily={josefin.style.fontFamily}
              fontSize="24px"
              lineHeight="30px"
              color="purpleDarker"
              mr="13px"
            >
              Position Income: $6900
            </Text>

            <Image src="/images/arrow-right.png" alt="arrow-right" />
          </Flex>
        </Flex>
      </Flex>

      {selected && <Box mt="20px" ml="16px" border="1px solid #444444" />}
    </Box>
  );
};

export default DefiItem;
