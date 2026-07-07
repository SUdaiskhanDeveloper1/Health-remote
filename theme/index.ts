import { extendTheme } from '@chakra-ui/react';
import { colors, fonts, breakpoints } from './foundations';
import { Button, Card, Badge, Input, Select, Textarea } from './components';
const theme = extendTheme({ colors, fonts, breakpoints, styles:{ global:{ body:{ bg:'brand.page', color:'brand.dark' }, '::selection':{ bg:'brand.cyan', color:'white' } } }, components:{ Button, Card, Badge, Input, Select, Textarea, Heading:{ baseStyle:{ letterSpacing:'-0.03em', color:'brand.dark' } } } });
export default theme;
