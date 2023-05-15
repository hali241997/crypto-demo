"use client";

import { Flex } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import UserDropdown from "../UserDropdown";
import Network from "../Network";

const Networks: FC = () => {
  const networks = useMemo(
    () => [
      {
        name: "All Networks",
        image: "/images/account.png",
        bgColor: "rgba(255, 255, 255, 0.34)",
      },
      {
        name: "Ethereum",
        image: "/images/ethereum.png",
      },
      {
        name: "Binance",
        image: "/images/binance.png",
      },
      {
        name: "Avalanche",
        image: "/images/binance.png",
      },
      {
        name: "Polygon",
        image: "/images/binance.png",
      },
      {
        name: "Fantom",
        image: "/images/binance.png",
      },
    ],
    []
  );

  return (
    <Flex
      mt="20px"
      mb="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <UserDropdown />

      {networks.map((item) => {
        return <Network key={item.name} {...item} />;
      })}
    </Flex>
  );
};

export default Networks;
