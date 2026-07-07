"use client";
import { Container, SimpleGrid, Box } from '@chakra-ui/react';
import { programs } from '@/data/programs'; import SectionHeading from '@/components/ui/SectionHeading'; import FeatureIconCard from '@/components/ui/FeatureIconCard';
export default function ProgramOverview(){return <Box py={16}><Container maxW="7xl"><SectionHeading center eyebrow="Programs" title="Care management modules for modern clinical teams" description="Separate frontend pages for RPM, CCM, RTM, AWV, BHI, PCM, and TCM workflows."/><SimpleGrid mt={10} columns={{base:1,md:2,lg:4}} spacing={5}>{programs.slice(0,8).map(p=><FeatureIconCard key={p.id} icon={p.icon} title={p.title} description={p.shortDescription}/>)}</SimpleGrid></Container></Box>}
