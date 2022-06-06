import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface IMemberProps {
  name: string;
  imageUrl: string;
  description: string;
  profileLink: string;
}

export function MemberCard({
  name,
  imageUrl,
  description,
  profileLink,
}: IMemberProps) {
  return (
    <Link href={profileLink} target="_blank">
      <Box maxW="sm" alignSelf="center">
        <Flex align="center" mt={8} direction="column">
          <Avatar src={imageUrl} mb={2} w={20} h={20} />
        </Flex>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="lg"
          p={8}
          rounded="xl"
          align="center"
          pos="relative"
          mt={4}
          _after={{
            content: `""`,
            w: 0,
            h: 0,
            borderLeft: "solid transparent",
            borderLeftWidth: 16,
            borderRight: "solid transparent",
            borderRightWidth: 16,
            borderBottom: "solid",
            borderBottomWidth: 16,
            borderBottomColor: useColorModeValue("white", "gray.800"),
            pos: "absolute",
            top: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Heading as="h3" fontSize="xl">
            {name}
          </Heading>
          <Text
            textAlign="center"
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize="sm"
          >
            {description}
          </Text>
        </Stack>
      </Box>
    </Link>
  );
}
