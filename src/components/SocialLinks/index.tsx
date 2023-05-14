"use client";

import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import SocialIcon from "../SocialIcon";

const SocialLinks: FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mb="42px">
      <Text
        fontSize="18px"
        lineHeight="20px"
        fontWeight="bold"
        color="white"
        letterSpacing="0.1em"
        mb="15px"
      >
        Socials
      </Text>

      <Flex gap="16px">
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>

        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>

        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>

        <SocialIcon>
          <LinkedInIcon />
        </SocialIcon>
      </Flex>
    </Flex>
  );
};

export default SocialLinks;
