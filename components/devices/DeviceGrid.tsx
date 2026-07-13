import { SimpleGrid } from '@chakra-ui/react'; import { devices } from '@/data/devices'; import DeviceCard from './DeviceCard';
export default function DeviceGrid(){return <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={5}>{devices.map(d=><DeviceCard key={d.id} device={d}/>)}</SimpleGrid>}
