import { Container, Heading, Text, Box, Button } from '@chakra-ui/react';

export default function ContactPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>Contact</Heading>
          <Text color="gray.600" mt={2}>Questions? Reach out and we&apos;ll get back to you.</Text>
          <Button as="a" href="mailto:demo@example.com" mt={4} colorScheme="teal">Email Us</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <Box color="gray.600">
          <Text mb={2}>Send inquiries to: <strong>demo@example.com</strong></Text>
          <Text>Phone: <strong>+1 (555) 555-5555</strong></Text>
        </Box>
      </Container>
    </>
  );
}
