"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const DownloadAppLinks: FC = () => {
  return (
    <Box position="absolute" top={0} left={0}>
      <Text fontSize="16px" lineHeight="24px" color="rgba(255, 255, 255, 0.55)">
        Download App
      </Text>
    </Box>
  );
};

export default DownloadAppLinks;
