import { Container, Heading, Text, Box, Button } from '@chakra-ui/react';

export default function AboutPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>About CareSync Pro</Heading>
          <Text color="gray.600" mt={2}>A frontend demo showcasing modern care-management UI patterns.</Text>
          <Button as="a" href="/request-demo" mt={4} colorScheme="teal">Request a Demo</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <Text color="gray.600">CareSync Pro is a frontend sample for demonstrating healthcare UI patterns, workflows, and layouts. All content here is dummy and for design/demo purposes only.</Text>
      </Container>
    </>
  );
}
