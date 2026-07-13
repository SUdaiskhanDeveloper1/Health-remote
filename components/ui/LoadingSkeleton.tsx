import { Card, CardBody, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
export default function LoadingSkeleton(){return <SimpleGrid columns={{base:1,md:3}} spacing={5}>{[1,2,3].map(i=><Card key={i}><CardBody><Stack><Skeleton h="22px"/><Skeleton h="14px"/><Skeleton h="80px"/></Stack></CardBody></Card>)}</SimpleGrid>}
