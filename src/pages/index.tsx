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

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
