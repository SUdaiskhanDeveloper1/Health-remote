export interface VitalReading { label:string; value:string; status:'normal'|'warning'|'critical' }
export interface Patient { id:string; name:string; age:number; condition:string; program:string; riskLevel:'Low'|'Medium'|'High'; lastReading:string; carePlanStatus:string; assignedProvider:string; nextFollowUp:string; vitals:VitalReading[] }
