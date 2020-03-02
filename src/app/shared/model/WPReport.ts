import { Employee } from './Employee';
import { WPReportRow } from './WPReportRow';
import { WorkPackage } from './WorkPackage';
import { Project } from './Project';

export class WPReport {
    constructor() {
        this.details = [];
    }
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
    engineers: Employee[];

    comment: string;
    workAccomplished: string;
    workPlanned: string;
    problemsThisPeriod: string;
    problemsAnticipated: string;
    details: WPReportRow[];

    initData() {
        this.comment = '';
        this.workAccomplished = "";
        this.workPlanned = "";
        this.problemsThisPeriod = "";
        this.problemsAnticipated = "";
        this.startDate = "";
        this.endDate = ""
        this.workPackageReportId = 0

    }
    copyWPinfo(wp: WorkPackage) {
        this.workPackageCode = wp.workPackageCode;
        this.workPackageId = wp.workPackageId;
        this.workPackageName = wp.name;
        this.responsibleEngineer = wp.responsibleEngineer;
        this.engineers = wp.engineers;
    }
    copyProjectInfo(p: Project) {
        this.projectId = p.projectId;
        this.projectCode = p.projectCode;
        this.projectName = p.projectName;
        this.projectManager = p.projectManager;
    }
}