"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const AccountButton: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="168px"
      height="48px"
      border="1.5px solid #FFF"
      borderRadius="56px"
      p="7px"
    >
      <Box
        width="35px"
        height="35px"
        border="1.5px solid #FFF"
        borderRadius="50%"
      >
        <Image
          src="/images/account.png"
          alt="account"
          width="32px"
          height="32px"
        />
      </Box>

      <Text color="grey" fontSize="16px" fontWeight="medium" flex={1} ml="15px">
        0x7132...084
      </Text>
    </Flex>
  );
};

export default AccountButton;
