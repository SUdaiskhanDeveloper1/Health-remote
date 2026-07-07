"use client";
import { Box, Flex } from '@chakra-ui/react';
import DashboardSidebar from './DashboardSidebar'; import DashboardNavbar from './DashboardNavbar';
export default function DashboardLayout({children,title}:{children:React.ReactNode;title:string}){return <Flex><DashboardSidebar/><Box flex="1" minW={0}><DashboardNavbar title={title}/><Box p={{base:4,md:6}}>{children}</Box></Box></Flex>}
