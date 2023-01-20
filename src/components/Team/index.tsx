import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { Container, Svg, SvgPath, Wave } from "./styles";
import { MemberCard } from "../MemberCard";

interface IGitHubUserProps {
  name: string;
  avatarUrl: string;
  bio: string;
  profileUrl: string;
}

export function Team() {
  const [devMembers, setDevMembers] = useState<IGitHubUserProps[]>([]);

  const devMembersGitUsername = useMemo(
    () => [
      "viniengelage",
      "ghellereluisa",
      "Fernando-Fritzen",
      "sundaeraul",
      "laerciomlb",
      "txsoura",
    ],
    [],
  );

  const handleGetMembers = useCallback(async () => {
    const apiCalls = devMembersGitUsername.map(devMemberUsername =>
      axios.get(`https://api.github.com/users/${devMemberUsername}`),
    );

    const results = await Promise.all(apiCalls);

    const formatedDevs: IGitHubUserProps[] = results.map(({ data }) => ({
      name: data.name,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      profileUrl: data.html_url,
    }));

    setDevMembers(formatedDevs);
  }, [devMembersGitUsername]);

  useEffect(() => {
    handleGetMembers();
  }, [handleGetMembers]);

  return (
    <Container>
      <Box bg="background" w="full">
        <Stack py={16} spacing={12}>
          <Stack
            spacing={0}
            align="center"
            color="white"
            p={{ base: "0 16px" }}
            textAlign="center"
          >
            <Heading>Nosso time</Heading>
            <Text>Equipe por trás da criação e desenvolvimeno do PATH!</Text>
          </Stack>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
            spacing={10}
            maxW={{ md: "1200px" }}
            alignSelf="center"
          >
            {devMembers.map(member => (
              <MemberCard
                imageUrl={member.avatarUrl}
                name={member.name}
                description={member.bio}
                profileLink={member.profileUrl}
              />
            ))}
          </SimpleGrid>
        </Stack>
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
