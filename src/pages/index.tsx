import { Flex } from "@chakra-ui/react";

import Head from "next/head";

import { Footer } from "../components/Footer";
import { Section1 } from "../components/Section1";

import { Phone } from "../components/Phone";
import { HowToWork } from "../components/HowToWork";
import { Progress } from "../components/Progress";
import { Header } from "../components/Header";
import { Team } from "../components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Path</title>
        <link rel="icon" type="image/png" href="/icon.ico" />

        <meta property="og:title" content="PATH - Um caminho para empatia" />
        <meta property="og:image" content="/opengraph-path.png" />
        <meta
          property="og:description"
          content="Aprenda o que é e como desenvolver empatia"
        />
        <meta property="og:url" content="https://empathyweb.vercel.app/" />
      </Head>

      <Flex direction="column" align="center" m="0 auto" flex={1} w="full">
        <Header />
        <Section1 />
        <Phone />
        <HowToWork />
        <Progress />
        <Team />
        <Footer />
      </Flex>
    </>
  );
}
