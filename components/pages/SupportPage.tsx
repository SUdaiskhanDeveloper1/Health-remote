import { Container, Heading, Text, Link as ChakraLink, Box, Button } from '@chakra-ui/react';

const DUMMY = 'https://www.marham.pk/';

export default function SupportPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>Support</Heading>
          <Text color="gray.600" mt={2}>Help center and resources for using the demo.</Text>
          <Button as="a" href="/faqs" mt={4} colorScheme="teal">View FAQs</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <Text mb={4} color="gray.600">For product documentation and external resources, visit:</Text>
        <ChakraLink href={DUMMY} isExternal color="teal.300">Marham - Healthcare Resources</ChakraLink>
      </Container>
    </>
  );
}
