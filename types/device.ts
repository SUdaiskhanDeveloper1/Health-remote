export interface Device { id:string; name:string; type:string; connectionType:string; supportedPrograms:string[]; status:'Online'|'Needs Review'|'Offline'; description:string; icon:string }
