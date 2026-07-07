"use client";
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
const links=[['Provider Overview','/dashboard/provider'],['Patient Dashboard','/dashboard/patient'],['Appointments','/appointments'],['Public Home','/']];
export default function DashboardSidebar(){return <Box w="260px" bg="brand.navy" color="white" minH="100vh" p={5} display={{base:'none',lg:'block'}}><Text fontWeight="900" fontSize="xl" mb={8}>CareSync Pro</Text><Stack>{links.map(([l,h])=><Button as={Link} href={h} key={h} variant="ghost" justifyContent="start" color="white" _hover={{bg:'whiteAlpha.200'}}>{l}</Button>)}</Stack></Box>}
