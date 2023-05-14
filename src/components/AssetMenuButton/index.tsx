"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { AssetMenuButtonProps } from "./types";

const AssetMenuButton: FC<AssetMenuButtonProps> = ({
  item,
  index,
  menus,
  setMenus,
}) => {
  const handleUpdateItem = useCallback(
    (idx: number) => {
      const _menus = [...menus];
      _menus.forEach((item) => {
        item.selected = false;
      });

      _menus[idx].selected = true;

      setMenus(_menus);
    },
    [menus, setMenus]
  );

  return (
    <Box cursor="pointer" onClick={() => handleUpdateItem(index)}>
      <Box
        pr={index === menus.length - 1 ? "0" : "30px"}
        pl={index === 0 ? "0" : "30px"}
        mb="11px"
        borderRight={index !== menus.length - 1 ? "1px solid #504977" : "0"}
      >
        <Text
          fontWeight={item.selected ? "bold" : "normal"}
          fontSize="20px"
          lineHeight="24px"
          color="greyLight"
        >
          {item.name}
        </Text>
      </Box>

      <Flex>
        <Flex flex={1} />
        <Flex>
          {item.selected && (
            <Box
              width="35px"
              height="3px"
              bgGradient="linear(180deg, #3461FF 0%, #8454EB 100%)"
              borderRadius="4px"
            />
          )}
        </Flex>
        <Flex flex={1} />
      </Flex>
    </Box>
  );
};

export default AssetMenuButton;
