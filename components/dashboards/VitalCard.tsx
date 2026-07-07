"use client";
import { Badge, Card, CardBody, Heading, HStack, Text } from '@chakra-ui/react'; import { statusVariant } from '@/lib/utils';
export default function VitalCard({label,value,status}:{label:string;value:string;status:string}){return <Card bg="white"><CardBody><HStack justify="space-between"><Text color="brand.muted">{label}</Text><Badge variant={statusVariant(status)}>{status}</Badge></HStack><Heading size="lg" mt={3}>{value}</Heading></CardBody></Card>}
