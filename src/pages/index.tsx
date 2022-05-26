import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section1 } from "../components/Section1";
import { Features } from "../components/Features";
import { Phone } from "../components/Phone";

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        flex={1}
      >
        <Section1 />
        <Features />
        <Phone />
      </Flex>
      <Footer />
    </>
  );
}
