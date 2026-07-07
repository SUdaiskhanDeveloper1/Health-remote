import { Device } from '@/types/device';
export const devices: Device[] = [
{ id:'d1', name:'Blood Pressure Monitor', type:'Vitals', connectionType:'4G / Bluetooth', supportedPrograms:['RPM','CCM'], status:'Online', description:'Mock connected cuff readings for systolic and diastolic trend review.', icon:'Gauge' },
{ id:'d2', name:'Glucometer', type:'Glucose', connectionType:'Bluetooth', supportedPrograms:['RPM','CCM'], status:'Needs Review', description:'Static glucose reading workflow with alert badges and trend cards.', icon:'Droplet' },
{ id:'d3', name:'Weight Scale', type:'Weight', connectionType:'4G', supportedPrograms:['RPM'], status:'Online', description:'Daily weight trend placeholder for chronic condition monitoring.', icon:'Scale' },
{ id:'d4', name:'Pulse Oximeter', type:'SpO2', connectionType:'Bluetooth', supportedPrograms:['RPM','TCM'], status:'Online', description:'Oxygen saturation monitoring card for care teams.', icon:'HeartPulse' },
{ id:'d5', name:'Smart Watch', type:'Activity', connectionType:'Mobile App Sync', supportedPrograms:['RTM','BHI'], status:'Online', description:'Activity, steps, and check-in placeholder for patient engagement.', icon:'Watch' },
{ id:'d6', name:'4G Gateway Hub', type:'Gateway', connectionType:'Cellular', supportedPrograms:['RPM'], status:'Offline', description:'Gateway connection UI placeholder with status and support hint.', icon:'Router' },
{ id:'d7', name:'Mobile App Sync', type:'Patient App', connectionType:'App', supportedPrograms:['All Programs'], status:'Online', description:'Patient-entered vitals, reminders, and education completion UI.', icon:'Smartphone' }
];
