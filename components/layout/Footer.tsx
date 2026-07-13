"use client";
import {
  Box,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
const cols = {
  Platform: [
    {
      label: "Remote Patient Monitoring",
      href: "/programs/remote-patient-monitoring",
    },
    {
      label: "Chronic Care Management",
      href: "/programs/chronic-care-management",
    },
    { label: "Patient App", href: "/patient-app" },
    { label: "Provider Dashboard", href: "/dashboard/provider" },
  ],
  Programs: [
    { label: "RPM", href: "/programs/remote-patient-monitoring" },
    { label: "CCM", href: "/programs/chronic-care-management" },
    { label: "RTM", href: "/programs/remote-therapeutic-monitoring" },
    { label: "AWV", href: "/programs/annual-wellness-visit" },
    { label: "BHI", href: "/programs/behavioral-health-integration" },
    { label: "PCM", href: "/programs/principal-care-management" },
    { label: "TCM", href: "/programs/transitional-care-management" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Support", href: "/support" },
    { label: "FAQs", href: "/faqs" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request Demo", href: "/request-demo" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
export default function Footer() {
  return (
    <Box bg="brand.navy" color="white" pt={14} pb={8}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8}>
          <Stack>
            <Heading size="md" color="brand.teal">CareSync Pro</Heading>
            <Text color="whiteAlpha.700">
              CareSync Pro is a frontend healthcare SaaS template for care
              management workflows, patient monitoring, and provider dashboards.
            </Text>
          </Stack>
          {Object.entries(cols).map(([title, items]) => (
            <Stack key={title}>
              <Heading size="sm" color="brand.teal">{title}</Heading>
              {items.map(({ label, href }) => (
                <Text
                  as={Link}
                  href={href}
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  key={label}
                >
                  {label}
                </Text>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
        <Divider my={8} borderColor="whiteAlpha.300" />
        <Text color="whiteAlpha.900" fontSize="sm">
          © 2026 CareSync Pro. Frontend-only UI concept. No real patient data,
          backend, billing, EHR, device, or video integration included.
        </Text>
      </Container>
    </Box>
  );
}
