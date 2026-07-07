export interface DashboardMetric { label:string; value:string; trend:string }
export interface Program { id:string; title:string; slug:string; shortDescription:string; longDescription:string; icon:string; features:string[]; workflowSteps:string[]; dashboardMetrics:DashboardMetric[]; ctaText:string }
