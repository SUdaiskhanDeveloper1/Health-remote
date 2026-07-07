"use client";
import { SimpleGrid } from '@chakra-ui/react'; import { patients } from '@/data/patients'; import VitalCard from '@/components/dashboards/VitalCard';
export default function PatientVitalsGrid(){return <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={5}>{patients[0].vitals.map(v=><VitalCard key={v.label} label={v.label} value={v.value} status={v.status}/>)}</SimpleGrid>}
