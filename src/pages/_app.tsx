import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import type { AppProps } from "next/app";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      background: "#BC74E9",
      primary: {
        default: "#862bbe",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
      button: "#8f25d1",
      button_hover: "#7d25b4",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
