import { Employee } from './Employee';

export class ProjectReport {
    projectReportId: number;
    projectId: number;
    projectCode: number;
    projectName: string;
    reportDate: string;
    startDate: string;
    endDate: string;
    projectManager: Employee;
    engineers: Employee[];
    lowWpStatus: WpStatus[];
    highWpStatus: WpStatus[];
    totals: WpStatus;
}
export class WpStatus {
    workPackageCode: string;
    workPackageName: string;
    wpReBudget: number;
    wpActualSepnds: number;
    wpReEAC: number;
    wpPmEAC: number;
    wpReVariance: number;
    wpPmVariance: number;
    wpReCompletion: number;
    wpPmCompletion: number;
    isClosed: boolean;
    engineersInitials: string;
}