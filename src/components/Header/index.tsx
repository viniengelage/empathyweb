import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
  Link,
  Box,
} from "@chakra-ui/react";

interface LinkButtonProps {
  title: string;
  link: string;
}

function LinkButton({ title, link }: LinkButtonProps) {
  return (
    <Link href={link}>
      <Text>{title}</Text>
    </Link>
  );
}

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
      color="white"
      bg="background"
      shadow="base"
      w="100%"
    >
      <Flex align="center" mr={5}>
        <Image src="/logo-white.svg" alt="logo" h="16" />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon w={6} h={6} />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
        spacing={6}
      >
        <LinkButton title="Sobre" link="#about" />
        <LinkButton title="Como funciona" link="#how-to-work" />
        <LinkButton title="Pontos" link="#progress" />
      </Stack>
    </Flex>
  );
}
