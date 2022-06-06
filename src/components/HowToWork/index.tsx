import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";

import { Container, Svg, SvgPath, Wave } from "./styles";

export function HowToWork() {
  return (
    <Container>
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="background"
        id="how-to-work"
      >
        <Flex
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="nowrap"
          minH="70vh"
          px={8}
          mb={16}
          marginTop={32}
          maxW={{ xl: "1200px" }}
        >
          <Stack
            spacing={4}
            w={{ base: "80%", md: "50%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="white"
              textAlign={["center", "center", "right", "right"]}
            >
              Como funciona?
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="white"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              Baseado em artigos desenvolvidos pelos alunos de psicologia e
              conceitos de gamificação, foi criado um roteiro de etapas de como
              entender e desenvolver a empatia, passando por desafios que geram
              pontos, as flores em seu jardim.
            </Heading>
          </Stack>
          <Image src="/how-to-work.svg" alt="home-app" h="container.sm" />
        </Flex>
      </Box>
      <Wave>
        <Svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <SvgPath d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </Svg>
      </Wave>
    </Container>
  );
}
