"use client";
import { Badge, Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MotionBox=motion(Box);
export default function PageHero({eyebrow,title,description,primary='Request Demo',secondary='Explore Features'}:{eyebrow:string;title:string;description:string;primary?:string;secondary?:string}){return <Box bgGradient="linear(to-br, white, brand.blueBg)" py={{base:16,md:24}}><Container maxW="7xl"><MotionBox initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}} maxW="850px"><Badge variant="info" mb={5}>{eyebrow}</Badge><Heading size={{base:'2xl',md:'3xl'}} lineHeight="1.05">{title}</Heading><Text mt={5} color="brand.muted" fontSize={{base:'lg',md:'xl'}}>{description}</Text><Stack direction={{base:'column',sm:'row'}} mt={8}><Button variant="demo" size="lg">{primary}</Button><Button variant="secondary" size="lg">{secondary}</Button></Stack></MotionBox></Container></Box>}
