import { ReactNode } from "react";

import { Box, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Container, Svg, SvgPath, Wave } from "./styles";

function ListHeader({ children }: { children: ReactNode }) {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
}

export function Footer() {
  return (
    <Container>
      <Box alignSelf="center">
        <Stack w="full" py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
            spacing={8}
            mt={32}
          >
            <Stack spacing={6}>
              <Box>
                <Image src="/logo.svg" alt="logo" height="64px" />
              </Box>
              <Text fontSize="sm">
                © 2022 PATH. Todos os direitos reservados
              </Text>
            </Stack>
            <Stack align="flex-start">
              <ListHeader>Projeto</ListHeader>
              <Link href="#about">O que é o PATH?</Link>
              <Link href="#how-to-work">Como funciona?</Link>
              <Link href="#progress">Pontuação</Link>
            </Stack>
            <Stack align="flex-start">
              <ListHeader>Contato</ListHeader>
              <Link href="https://uniamerica.br/">Instituição</Link>
              <Link href="https://uniamerica.br/">Portifólio digital</Link>
              {/* <Link href="/hey">Github</Link> */}
              {/* <Link href="/hey">Linkedin</Link> */}
            </Stack>
          </SimpleGrid>
        </Stack>
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
      </Box>
    </Container>
  );
}
