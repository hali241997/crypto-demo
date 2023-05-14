"use client";

import { FC, useMemo } from "react";
import WalletItem from "../WalletItem";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AssetNameValue from "../AssetNameValue";
import { josefin } from "@/utils/font";

const WalletItems: FC = () => {
  const walletItems = useMemo(
    () => [
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
        selected: true,
      },
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
        selected: false,
      },
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
        selected: false,
      },
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
        selected: false,
      },
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
        selected: false,
      },
      {
        name: "BNB",
        from: "Binance",
        amount: "$247.27",
        percent: "+46%",
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
        <AssetNameValue name="Wallet" value="$ 560 900 500" />

        {walletItems.map((item, index) => {
          return <WalletItem key={index} {...item} />;
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

export default WalletItems;
