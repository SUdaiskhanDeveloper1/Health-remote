"use client";
import { Card, CardBody, HStack, Icon, Text, Heading, VStack } from '@chakra-ui/react';
import * as Icons from 'lucide-react';
export default function FeatureIconCard({icon='ShieldCheck',title,description}:{icon?:string;title:string;description:string}){const I=(Icons as any)[icon]||Icons.ShieldCheck;return <Card bg="white" h="full" _hover={{transform:'translateY(-4px)',boxShadow:'0 20px 50px rgba(15,23,42,.10)'}}><CardBody><HStack align="start" spacing={4}><HStack w="46px" h="46px" rounded="16px" bg="brand.blueBg" color="brand.blue" justify="center"><Icon as={I} boxSize={5}/></HStack><VStack align="start" spacing={2}><Heading size="sm">{title}</Heading><Text color="brand.muted" fontSize="sm">{description}</Text></VStack></HStack></CardBody></Card>}
