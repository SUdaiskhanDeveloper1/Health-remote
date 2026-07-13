"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDown, Menu as MenuIcon, ShieldPlus } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
const programs = [
  ["RPM", "/programs/remote-patient-monitoring"],
  ["CCM", "/programs/chronic-care-management"],
  ["RTM", "/programs/remote-therapeutic-monitoring"],
  ["AWV", "/programs/annual-wellness-visit"],
  ["BHI", "/programs/behavioral-health-integration"],
  ["PCM", "/programs/principal-care-management"],
  ["TCM", "/programs/transitional-care-management"],
];
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="whiteAlpha.900"
      backdropFilter="blur(14px)"
      borderBottom="1px solid"
      borderColor="brand.border"
      position="sticky"
      top={0}
      zIndex={20}
    >
      <Container maxW="7xl">
        <Flex h="76px" align="center" justify="space-between">
          <HStack as={Link} href="/" spacing={3}>
            <Flex
              bg="brand.blue"
              color="white"
              w="42px"
              h="42px"
              rounded="14px"
              align="center"
              justify="center"
            >
              <ShieldPlus size={22} />
            </Flex>
            <Text fontWeight="900" fontSize="xl" color="brand.navy">
              CareSync Pro
            </Text>
          </HStack>
          <HStack display={{ base: "none", lg: "flex" }} spacing={1}>
            <Button as={Link} href="/" variant="ghost">
              Home
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDown size={16} />}
              >
                Programs
              </MenuButton>
              <MenuList>
                {programs.map(([l, h]) => (
                  <MenuItem as={Link} href={h} key={h}>
                    {l}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Button as={Link} href="/devices" variant="ghost">
              Devices
            </Button>
            <Button as={Link} href="/patient-app" variant="ghost">
              Patient App
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDown size={16} />}
              >
                Dashboards
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} target="_blank" href="/dashboard/provider">
                  Provider Dashboard
                </MenuItem>
                <MenuItem as={Link} target="_blank" href="/dashboard/patient">
                  Patient Dashboard
                </MenuItem>
                <MenuItem as={Link} target="_blank" href="/appointments">
                  Appointments
                </MenuItem>
              </MenuList>
            </Menu>
            <Button as={Link} href="/pricing" variant="ghost">
              Pricing
            </Button>
          </HStack>
          <HStack>
            <Button
              as={Link}
              href="/request-demo"
              variant="demo"
              display={{ base: "none", md: "inline-flex" }}
            >
              Request Demo
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label="Open navigation"
              icon={<MenuIcon />}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
