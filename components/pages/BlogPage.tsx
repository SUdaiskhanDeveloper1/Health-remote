import { Container, Heading, Text, Stack, Link as ChakraLink, Box, Button } from '@chakra-ui/react';

const DUMMY = 'https://www.marham.pk/';

export default function BlogPage(){
  return (
    <>
      <Box bg="gray.50" py={12}>
        <Container maxW="container.md">
          <Heading>Blog</Heading>
          <Text color="gray.600" mt={2}>Insights and guides about remote patient monitoring and care management.</Text>
          <Button as={ChakraLink} href="/request-demo" mt={4} colorScheme="teal">Request a Demo</Button>
        </Container>
      </Box>
      <Container maxW="container.md" py={8}>
      <Heading mb={4}>Latest Posts</Heading>
      <Text mb={4} color="gray.500">Welcome to the demo blog. Below are short excerpts from sample articles related to remote monitoring and care management.</Text>
      <Stack spacing={6} color="gray.700">
        <Stack>
          <Text fontWeight="bold">How to Monitor Patient Vitals Remotely</Text>
          <Text fontSize="sm">A short overview of best practices for setting up remote patient monitoring programs, choosing devices, and integrating data into clinical workflows.</Text>
          <ChakraLink href={DUMMY} isExternal color="teal.300">Read more</ChakraLink>
        </Stack>
        <Stack>
          <Text fontWeight="bold">Top Chronic Care Management Strategies</Text>
          <Text fontSize="sm">Key approaches to managing chronic conditions, using care plans, and coordinating multidisciplinary teams.</Text>
          <ChakraLink href={DUMMY} isExternal color="teal.300">Read more</ChakraLink>
        </Stack>
        <Stack>
          <Text fontWeight="bold">How Care Teams Can Use RPM</Text>
          <Text fontSize="sm">Examples of operational workflows, patient engagement tactics, and success metrics for RPM pilots.</Text>
          <ChakraLink href={DUMMY} isExternal color="teal.300">Read more</ChakraLink>
        </Stack>
      </Stack>
      </Container>
    </>
  );
}
