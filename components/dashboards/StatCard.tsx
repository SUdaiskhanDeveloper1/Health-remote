import { Card, CardBody, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
export default function StatCard({label,value,help}:{label:string;value:string;help?:string}){return <Card bg="white"><CardBody><Stat><StatLabel color="brand.muted">{label}</StatLabel><StatNumber>{value}</StatNumber>{help&&<StatHelpText>{help}</StatHelpText>}</Stat></CardBody></Card>}
