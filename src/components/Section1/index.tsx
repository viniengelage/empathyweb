import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";

export function Section1() {
  return (
    <Box
      display="flex"
      w="full"
      alignItems="center"
      justifyContent="center"
      bg="background"
    >
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
        mt={8}
        maxW={{ xl: "1200px" }}
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
            color="white"
            textAlign={["center", "center", "left", "left"]}
          >
            PATH
          </Heading>
          <Heading
            as="h2"
            color="white"
            opacity="0.8"
            fontSize="24px"
            fontWeight="light"
            lineHeight={1.6}
            textAlign={["center", "center", "left", "left"]}
          >
            Aprenda mais sobre a empatia, e como desenvolve-lá para evoluir a si
            mesmo perante os outros.
          </Heading>

          <Link href="#about">
            <Button
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="lg"
              w="xs"
              bg="white"
              color="background"
            >
              <DownloadIcon marginRight="2" />
              Saiba mais
            </Button>
          </Link>
        </Stack>

        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="/backpack-circle.svg" alt="home-app" w="lg" padding={8} />
        </Box>
      </Flex>
    </Box>
  );
}
