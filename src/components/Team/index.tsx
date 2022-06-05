import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Container, Svg, SvgPath, Wave } from "./styles";

interface AvatarProps {
  title: string;
  text: string;
  avatarUrl: string;
}

function Avatar({ title, text, avatarUrl }: AvatarProps) {
  return (
    <Stack>
      <Flex
        w={32}
        h={32}
        align="center"
        justify="center"
        alignSelf="center"
        color="white"
        rounded="full"
        bg="white"
        boxShadow="md"
      >
        <Image src={avatarUrl} alt="icon-image" w={32} rounded="full" />
      </Flex>
      <Text fontWeight={600} color="white" fontSize="xl" textAlign="center">
        {title}
      </Text>
      <Text color="white" lineHeight="6" fontSize="xl" textAlign="center">
        {text}
      </Text>
    </Stack>
  );
}

export function Team() {
  return (
    <Container>
      <Box
        bg="purple.400"
        display="flex"
        width="full"
        alignItems="center"
        justifyContent="center"
        shadow="base"
        p={8}
      >
        <Box
          p={6}
          alignItems="center"
          justifyContent="center"
          maxW={{ xl: "1200px" }}
          mt={8}
        >
          <Heading textAlign="center" p={8} color="white">
            Time de desenvolvimento
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Avatar
              avatarUrl="https://avatars.githubusercontent.com/u/50602159?v=4"
              title="Vinicios Engelage"
              text="Desenvolvedor FullStack"
            />

            <Avatar
              avatarUrl="https://avatars.githubusercontent.com/u/49946934?v=4"
              title="Laércio Bubiak"
              text="DevOps"
            />

            <Avatar
              avatarUrl="https://avatars.githubusercontent.com/u/64644028?v=4"
              title="Fernando"
              text="Frontend"
            />
          </SimpleGrid>
        </Box>
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
