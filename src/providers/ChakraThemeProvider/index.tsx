"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC } from "react";
import { ChakraThemeProviderProps } from "./types";

const theme = extendTheme({
  colors: {
    grey: "#9A99AD",
    greyLight: "#D6CEFF",
    purple: "#C9BFFF",
    purpleDark: "#8882FF",
    purpleDarker: "#907BFF",
    purpleBold: "#7449BD",
    purpleRgb: "rgba(83, 30, 135, 0.34)",
    green: "#7BFF80",
    red: "#FF7B7B",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
      },
    },
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
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
