"use client";
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
export default function EmptyState({title='No results found',description='Try changing your filters or search term.'}:{title?:string;description?:string}){return <Box bg="white" border="1px dashed" borderColor="brand.border" rounded="24px" p={8}><VStack><Heading size="md">{title}</Heading><Text color="brand.muted">{description}</Text><Button variant="secondary">Reset filters</Button></VStack></Box>}
