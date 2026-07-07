import { Container, Heading, Text, Stack, Box, Button } from '@chakra-ui/react';

export default function PrivacyPolicyPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>Privacy Policy</Heading>
          <Text color="gray.600" mt={2}>Information about data practices for this demo site.</Text>
          <Button as="a" href="/contact" mt={4} colorScheme="teal">Contact</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <Stack spacing={4} color="gray.600">
          <Text>
            CareSync Pro is a demo frontend template. This site contains only sample content and does not collect, store, or process real patient data.
          </Text>
          <Text>
            Data Collection: No personal data is collected by this demo. Any forms shown are placeholders and do not submit or persist information.
          </Text>
          <Text>
            Third-Party Links: The site may link to external resources for demonstration purposes. We are not responsible for the content or privacy practices of external sites.
          </Text>
          <Text>
            Use of Cookies: This demo does not set tracking cookies. In a real application you should disclose cookie usage and provide controls for users.
          </Text>
          <Text>
            Contact: For questions about this demo, email demo@example.com.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
