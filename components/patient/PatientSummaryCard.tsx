"use client";
import { Avatar, Badge, Card, CardBody, Heading, HStack, Text, VStack } from '@chakra-ui/react'; import { patients } from '@/data/patients';
export default function PatientSummaryCard(){const p=patients[0];return <Card bg="white"><CardBody><HStack><Avatar name={p.name}/><VStack align="start" spacing={0}><Heading size="md">{p.name}</Heading><Text color="brand.muted">{p.age} · {p.condition}</Text></VStack><Badge variant="success" ml="auto">{p.carePlanStatus}</Badge></HStack></CardBody></Card>}
