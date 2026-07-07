export interface Appointment { id:string; patientName:string; providerName:string; date:string; time:string; type:string; status:'Scheduled'|'Completed'|'Rescheduled'|'Cancelled'; program:string }
