"use client";
import { Card, CardBody, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
export default function MonthlySummaryCard(){return <Card bg="white"><CardBody><Heading size="md">Monthly Service Summary</Heading><Text mt={2} color="brand.muted">Frontend-only report placeholder.</Text><UnorderedList mt={4} color="brand.muted"><ListItem>186 eligible patients reviewed</ListItem><ListItem>94% documentation readiness</ListItem><ListItem>32 reports queued for billing review</ListItem></UnorderedList></CardBody></Card>}
