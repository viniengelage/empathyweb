import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";

import { Container, Svg, SvgPath, Wave } from "./styles";

export function Progress() {
  return (
    <Container>
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="progress"
      >
        <Flex
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="nowrap"
          minH="70vh"
          px={8}
          mb={16}
          marginTop={64}
          maxW={{ xl: "1200px" }}
        >
          <Image src="/feed-phone.svg" alt="home-app" h="container.sm" />
          <Stack
            spacing={4}
            w={{ base: "80%", md: "50%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="primary.800"
              textAlign={["center", "center", "right", "right"]}
            >
              Pontuação
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              Você escolhe um horário, e todo dia um desafio simples é enviado
              para seu aplicativo. Cumpra e ganhe pontos para continuar. No
              feed, é possível acessar materiais que contemplam o estudo sobre o
              assunto, em formatos que você escolhe, sendo áudio, vídeo ou
              textos.
            </Heading>
          </Stack>
        </Flex>
        <Wave>
          <Svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <SvgPath
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </Svg>
        </Wave>
      </Box>
    </Container>
  );
}
