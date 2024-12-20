import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  Button,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contato</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>
              Entre em contato comigo e vamos conversar!
            </Heading>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text
              color={`${color}.500`}
              fontWeight={600}
              fontSize={"lg"}
              px={4}
            >
              {profile.email}
            </Text>
            <Center>
              <HStack
                pt={4}
                spacing={4}
                paddingRight={2}
                _hover={{ color: "#0A66C2" }}
              >
                <Button>
                  <FaLinkedin onClick={linkedin} size={28} />
                </Button>
              </HStack>
              <HStack
                pt={4}
                spacing={4}
                paddingRight={2}
                _hover={{ color: "#7F278F" }}
              >
                <Button>
                  <FaGithub onClick={github} size={28} />
                </Button>
              </HStack>
              <HStack pt={4} spacing={4} _hover={{ color: "#D64C3E" }}>
                <Button>
                  <SiGmail onClick={email} size={28} />
                </Button>
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
