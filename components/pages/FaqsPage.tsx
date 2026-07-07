import { Container, Heading, Text, UnorderedList, ListItem, Box, Button } from '@chakra-ui/react';

export default function FaqsPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>FAQs</Heading>
          <Text color="gray.600" mt={2}>Common questions about this demo site and usage.</Text>
          <Button as="a" href="/contact" mt={4} colorScheme="teal">Contact Support</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
        <UnorderedList color="gray.600" spacing={4}>
          <ListItem>
            <Text as="span" fontWeight="bold">What is CareSync Pro?</Text> — CareSync Pro is a frontend UI prototype demonstrating healthcare workflows, monitoring, and dashboards.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">Is there a working backend?</Text> — No. This repository contains only frontend components and placeholder pages.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">How do I request a demo?</Text> — Use the Request Demo page linked in the header or footer to simulate the demo flow.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">Does this site store patient data?</Text> — No. The demo does not persist or transmit real patient information.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">Where can I find program info?</Text> — Visit the Programs section to see sample program pages and descriptions.
          </ListItem>
        </UnorderedList>
      </Container>
    </>
  );
}
