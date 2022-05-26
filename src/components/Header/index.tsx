import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding={4}
      bg="whiteAlpha.500"
      color="purple.800"
      shadow="base"
      w="100%"
    >
      <Flex align="center" mr={5}>
        <Image src="/logo.svg" alt="logo" h="8" />
      </Flex>

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box> */}

      {/* <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        // flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>O que é?</Text>
        <Text>Quem somos</Text>
        <Text>Por que?</Text>
      </Stack> */}
    </Flex>
  );
}
