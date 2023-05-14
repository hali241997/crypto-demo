"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import AssetFiltersNameDropdown from "../AssetFiltersNameDropdown";
import AssetMenuButton from "../AssetMenuButton";
import { AssetMenuItem } from "../AssetMenuButton/types";

const DigitalAssetsMenu: FC = () => {
  const [menus, setMenus] = useState<AssetMenuItem[]>([
    {
      name: "Overview",
      selected: true,
    },
    {
      name: "Wallet",
      selected: false,
    },
    {
      name: "Tokens",
      selected: false,
    },
    {
      name: "DeFi",
      selected: false,
    },
    {
      name: "NFTs",
      selected: false,
    },
    {
      name: "Transactions",
      selected: false,
    },
  ]);

  const filtersMenuName = useMemo(() => {
    const name = menus.filter((item) => item.selected)[0].name;

    if (name === "Overview") {
      return "All networks";
    }

    return name;
  }, [menus]);

  return (
    <Box>
      <Flex mb="16px">
        {menus.map((item, index) => {
          return (
            <AssetMenuButton
              key={item.name}
              item={item}
              index={index}
              menus={menus}
              setMenus={setMenus}
            />
          );
        })}
      </Flex>

      <Flex gap="20px">
        <AssetFiltersNameDropdown name={filtersMenuName} />

        <Flex
          border="1px solid #444444"
          bgColor="rgba(0, 0, 0, 0.35)"
          backdropFilter="blur(5px)"
          p="9px 11px 6px 16px"
          borderRadius="40px"
        >
          <Text
            fontWeight="semibold"
            fontSize="11px"
            lineHeight="13px"
            mr="3px"
          >
            Hightest first
          </Text>

          <Image
            src="/images/arrow-down.png"
            alt="arrow-down"
            width="15px"
            height="15px"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DigitalAssetsMenu;
