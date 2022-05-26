import { Box, Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";

export function Section1() {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          PATH
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
          Capacidade de projetar a personalidade de alguém num objeto, de forma
          que este pareça como que impregnado dela.
        </Heading>

        <Button
          borderRadius="8px"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
          bg="button"
          color="white"
          _hover={{
            bg: "button_hover",
          }}
        >
          <DownloadIcon marginRight="2" />
          Fazer download
        </Button>
      </Stack>

      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src="/backpack.svg"
          alt="home-app"
          w="lg"
          bg="white"
          // rounded="1rem"
          // shadow="2xl"
          // padding={8}
        />
      </Box>
    </Flex>
  );
}
