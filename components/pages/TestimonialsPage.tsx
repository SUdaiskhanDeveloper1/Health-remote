import { Container, Heading, Text, Stack, Box, Button } from '@chakra-ui/react';

export default function TestimonialsPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>Testimonials</Heading>
          <Text color="gray.600" mt={2}>What users say about the demo and UI patterns.</Text>
          <Button as="a" href="/request-demo" mt={4} colorScheme="teal">Request a Demo</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <Stack spacing={4} color="gray.600">
          <Text>“CareSync Pro helped our clinic track patients more efficiently.” — Demo Clinic</Text>
          <Text>“The patient app improved engagement during our pilot.” — Healthcare Partner</Text>
          <Text>“Easy to demo and prototype for stakeholders.” — Product Team</Text>
        </Stack>
      </Container>
    </>
  );
}
