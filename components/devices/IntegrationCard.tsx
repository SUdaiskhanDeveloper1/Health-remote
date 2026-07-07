"use client";
import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
export default function IntegrationCard({title,description}:{title:string;description:string}){return <Card bg="white"><CardBody><Heading size="md">{title}</Heading><Text color="brand.muted" mt={2}>{description}</Text></CardBody></Card>}
