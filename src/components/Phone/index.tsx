import { Flex, Heading, Image, Stack } from "@chakra-ui/react";

export function Phone() {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
      marginTop={16}
    >
      <Image src="/home-app-phone.png" alt="home-app" w="sm" bg="white" />

      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-end", "flex-end"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "right", "right"]}
        >
          Conforto
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "right", "right"]}
        >
          Nossa aplicação foi desenhada pensando no conforto do usuário, para
          que ajude durante sua jornada.
        </Heading>
      </Stack>
    </Flex>
  );
}
