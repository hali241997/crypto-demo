"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import AppLinks from "../AppLinks";
import Features from "../Features";
import Support from "../Support";
import Resources from "../Resources";
import SocialLinks from "../SocialLinks";
import DownloadAppLinks from "../DownloadAppLinks";

const Footer: FC = () => {
  return (
    <Box p="0 144px 82px 144px">
      <Flex justifyContent="space-between">
        <AppLinks />
        <Features />
        <Support />
        <Resources />
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="47px"
        position="relative"
      >
        <SocialLinks />

        <Text textAlign="center" fontSize="14px" lineHeight="24px">
          Copyright ©Fullet 2022. All rights reserved.
        </Text>

        <DownloadAppLinks />
      </Flex>
    </Box>
  );
};

export default Footer;
