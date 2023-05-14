"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC } from "react";
import { ChakraThemeProviderProps } from "./types";

const theme = extendTheme({
  colors: {
    grey: "#9A99AD",
    purple: "#C9BFFF",
    purpleDark: "#8882FF",
  },
});

const ChakraThemeProvider: FC<ChakraThemeProviderProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraThemeProvider;
