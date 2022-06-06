import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Container, Svg, SvgPath, Wave } from "./styles";

export function Phone() {
  return (
    <Container>
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        shadow="base"
        id="about"
      >
        <Flex
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="nowrap"
          minH="70vh"
          px={8}
          mb={16}
          mt={{ base: 32, md: 16 }}
          maxW={{ xl: "1200px" }}
        >
          <Image src="/phone-circle.svg" alt="home-app" h="container.sm" />
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
              O que é o PATH?
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
              PATH é um projeto acadêmico, desenvolvido por alunos de engenharia
              de software e psicologia, cujo objetivo é ensinar o que é empatia,
              e como pode ser desenvolvida nas pessoas.
              {/* Baseado em artigos
            desenvolvidos pelos alunos de psicologia e conceitos de gamificação,
            foi criado um roteiro de etapas de como entender e desenvolver a
            empatia, passando por desafios que geram pontos, as flores em seu
            jardim. */}
              {/* Você escolhe um horário, e todo dia um desafio simples é
            enviado para seu aplicativo. Cumpra e ganhe pontos para continuar.
            No feed, é possível acessar materiais que contemplam o estudo sobre
            o assunto, em formatos que você escolhe, sendo áudio, vídeo ou
            textos. */}
            </Heading>
          </Stack>
          {/* <Image src="/phone-circle.svg" alt="home-app" h="container.sm" /> */}
        </Flex>
        <Wave>
          <Svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <SvgPath
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            />
            <SvgPath
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            />
            <SvgPath
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            />
          </Svg>
        </Wave>
      </Box>
    </Container>
  );
}
