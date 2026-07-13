import { Badge } from '@chakra-ui/react';
export default function CustomBadge({children,variant='info'}:{children:React.ReactNode;variant?:string}){return <Badge variant={variant}>{children}</Badge>}
