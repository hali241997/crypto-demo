"use client";

import Balance from "@/components/Balance";
import DefiItems from "@/components/DefiItems";
import DigitalAssetsMenu from "@/components/DigitalAssetsMenu";
import Heading from "@/components/Heading";
import Networks from "@/components/Networks";
import NftItems from "@/components/NftItems";
import ProfileBreakdown from "@/components/ProfileBreakdown";
import WalletItems from "@/components/WalletItems";
import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <Box pl="133px" pr="147px">
      <Heading />

      <Networks />

      <Flex mb="16px" justifyContent="space-between">
        <Box>
          <Balance />

          <DigitalAssetsMenu />
        </Box>

        <ProfileBreakdown />
      </Flex>

      <WalletItems />

      <DefiItems />

      <NftItems />
    </Box>
  );
};

export default Profile;
