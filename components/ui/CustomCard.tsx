import { Card, CardBody } from '@chakra-ui/react';
export default function CustomCard({children,...props}:any){return <Card bg="white" {...props}><CardBody>{children}</CardBody></Card>}
