import PageHero from '@/components/ui/PageHero'; import { Program } from '@/types/program';
export default function ProgramHero({program}:{program:Program}){return <PageHero eyebrow="Care Program" title={`${program.title} Software UI`} description={program.longDescription} primary={program.ctaText} secondary="View Dashboard Preview"/>}
