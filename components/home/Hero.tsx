"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Activity, Bell, FileText, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
const MotionBox = motion(Box);
export default function Hero() {
  const cards = [
    ["RPM Monitoring", Activity],
    ["CCM Care Plans", FileText],
    ["Billing Reports", Bell],
    ["Patient App", Smartphone],
  ];
  return (
    <Box
      bgGradient="linear(to-br, white, brand.blueBg)"
      py={{ base: 16, md: 24 }}
                
    >
      <Container maxW="7xl" >
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr .95fr" }}
          gap={10}
          alignItems="baseline"
        >
          <MotionBox
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="info"  mb={6}>
              Healthcare SaaS
            </Badge>
            <Heading  size={{ base: "2xl", md: "2xl" }} lineHeight="1">
              All-in-One Care Management Software for Modern Healthcare
              Providers
            </Heading>
            <Text
              mt={5}
              fontSize={{ base: "lg", md: "xl" }}
              color="brand.muted"
            >
              Streamline remote patient monitoring, chronic care management,
              care coordination, patient engagement, and billing workflows
              through one connected healthcare platform.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} mt={8}>
              <Button as={Link} href="/request-demo" variant="demo" size="lg">
                Request a Demo
              </Button>
              <Button
                as={Link}
                href="/programs/remote-patient-monitoring"
                variant="secondary"
                size="lg"
              >
                Explore Programs
              </Button>
            </Stack>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card bg="white" p={2}>
              <CardBody>
                <HStack justify="space-between" mb={5}>
                  <Box>
                    <Text color="brand.muted">Monthly Service Summary</Text>
                    <Heading size="lg">Clinical Command Center</Heading>
                  </Box>
                  <Badge variant="success">Live UI</Badge>
                </HStack>
                <SimpleGrid columns={2} spacing={4}>
                  {[
                    ["Patient Vitals", "1,284"],
                    ["Care Plan Status", "92%"],
                    ["Tracked Time", "742h"],
                    ["Open Alerts", "26"],
                  ].map(([l, v]) => (
                    <Stat bg="brand.page" p={4} rounded="18px" key={l}>
                      <StatLabel color="brand.muted">{l}</StatLabel>
                      <StatNumber color="brand.navy">{v}</StatNumber>
                    </Stat>
                  ))}
                </SimpleGrid>
                <VStack align="stretch" mt={5}>
                  {[
                    "BP trend stable",
                    "Glucose alert needs review",
                    "CCM minutes complete",
                  ].map((x, i) => (
                    <Box key={x}>
                      <HStack justify="space-between">
                        <Text fontWeight="700">{x}</Text>
                        <Text color="brand.muted">{[78, 44, 96][i]}%</Text>
                      </HStack>
                      <Progress
                        value={[78, 44, 96][i]}
                        colorScheme={i === 1 ? "orange" : "blue"}
                        rounded="full"
                      />
                    </Box>
                  ))}
                </VStack>
                <SimpleGrid columns={2} spacing={3} mt={5}>
                  {cards.map(([label, Icon]: any) => (
                    <HStack
                      key={label}
                      bg="brand.blueBg"
                      color="brand.blue"
                      p={3}
                      rounded="16px"
                    >
                      <Icon size={18} />
                      <Text fontWeight="700" fontSize="sm">
                        {label}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Card>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
}
