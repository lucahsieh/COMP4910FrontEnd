import { Employee } from './Employee';
import { WPReportRow } from './WPReportRow';

export class WPReport {
    workPackageName: string;
    workPackageId: number;
    workPackageCode: string;
    workPackageTitle: string;
    projectId: number;
    projectCode: string;
    projectName: string;
    workPackageReportId: number;
    reportDate: string;
    startDate: string;
    endDate: string;

    projectManager: Employee;
    responsibleEngineer: Employee;
    Engineers: Employee[];

    comment: string;
    workAccomplished: string;
    workPlanned: string;
    problemsThisPeriod: string;
    problemsAnticipated: string;
    details: WPReportRow[];
}