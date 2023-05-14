"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import AssetNameValue from "../AssetNameValue";
import DefiItem from "../DefiItem";
import { josefin } from "@/utils/font";

const DefiItems: FC = () => {
  const defis = useMemo(
    () => [
      {
        name: "Pool",
        from: "ETH/LIT on curve",
        cp: "$112k",
        capital: "$115k",
        capitalPercent: "+6%",
        asset: "$112k",
        assetPercent: "+46%",
        selected: true,
      },
      {
        name: "Pool",
        from: "ETH/LIT on curve",
        cp: "$112k",
        capital: "$115k",
        capitalPercent: "+6%",
        asset: "$112k",
        assetPercent: "+46%",
        selected: false,
      },
      {
        name: "Pool",
        from: "ETH/LIT on curve",
        cp: "$112k",
        capital: "$115k",
        capitalPercent: "+6%",
        asset: "$112k",
        assetPercent: "+46%",
        selected: false,
      },
      {
        name: "Pool",
        from: "ETH/LIT on curve",
        cp: "$112k",
        capital: "$115k",
        capitalPercent: "+6%",
        asset: "$112k",
        assetPercent: "+46%",
        selected: false,
      },
      {
        name: "Pool",
        from: "ETH/LIT on curve",
        cp: "$112k",
        capital: "$115k",
        capitalPercent: "+6%",
        asset: "$112k",
        assetPercent: "+46%",
        selected: false,
      },
    ],
    []
  );

  return (
    <Box mb="100px">
      <Box
        p="79px 40px 36px 16px"
        border="1px solid #444444"
        bgColor="rgba(0, 0, 0, 0.5)"
        borderRadius="40px"
      >
        <AssetNameValue name="DeFi" value="$ 500 500" />

        {defis.map((item, index) => {
          return <DefiItem key={index} {...item} />;
        })}
      </Box>

      <Flex alignItems="center" justifyContent="flex-end" mt="36px">
        <Text
          fontFamily={josefin.style.fontFamily}
          fontWeight="bold"
          fontSize="20px"
          lineHeight="30px"
        >
          See More
        </Text>
        <Image
          src="/images/arrow-right.png"
          alt="arrow-right"
          width="34px"
          height="34px"
        />
      </Flex>
    </Box>
  );
};

export default DefiItems;
