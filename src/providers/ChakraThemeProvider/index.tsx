"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { ChakraThemeProviderProps } from "./types";

const ChakraThemeProvider: FC<ChakraThemeProviderProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraThemeProvider;
