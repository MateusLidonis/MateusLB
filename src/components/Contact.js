import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
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
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4} paddingRight={2} _hover={{color:'#0A66C2'}}>
                <FaLinkedin onClick={linkedin} size={28} role='button' />
              </HStack>
              <HStack pt={4} spacing={4} paddingRight={2} _hover={{color:'#7F278F'}}>
                <FaGithub onClick={github} size={28} role='button'/>
              </HStack>
              <HStack pt={4} spacing={4} paddingLeft={0.5} _hover={{color:'#D64C3E'}}>
                <SiGmail onClick={email} size={28} role='button' />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

