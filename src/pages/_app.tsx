import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import "@fontsource/poppins";
import Head from "next/head";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      background: "#9E74D0",
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
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="PATH" key="twhandle" />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://empathyweb.vercel.app/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://empathyweb.vercel.app/opengraph-path.png"
          key="ogimage"
        />

        <meta property="og:site_name" content="PATH" key="ogsitename" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <meta
          property="og:description"
          content="Entenda o que é empatia, e como desenvolve-lá de uma forma amigável. Complete desafios e ganhe pontos para evoluir dentro de sua jornada"
          key="ogdesc"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
