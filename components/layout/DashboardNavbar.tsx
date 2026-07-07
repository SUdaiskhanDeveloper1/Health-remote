"use client";
import { Avatar, Box, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react';
export default function DashboardNavbar({title}:{title:string}){return <Flex bg="white" borderBottom="1px solid" borderColor="brand.border" p={5} align="center" justify="space-between"><Box><Heading size="md">{title}</Heading><Text color="brand.muted" fontSize="sm">Frontend-only clinical workspace preview</Text></Box><HStack display={{base:'none',md:'flex'}}><Input placeholder="Search workspace" maxW="260px"/><Avatar name="Care Team" size="sm"/></HStack></Flex>}
