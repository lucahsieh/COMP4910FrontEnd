import { Project } from './Project';
import { Employee } from './Employee';

export class WorkPackage {
    workPackageId: number;
    projectId: number;
    responsibleEngineer: Employee;
    workers: Employee[];
    workPackageCode: string;
    workPackageTitle: string;
    contractor: string;
    description: string;
    proposedHours: number;
    budgetHours: number;
    issueDate: Date;
    isClosed: boolean;
    parentWorkPackageId: number;
    parentWorkPackage?: WorkPackage;
    childrenWorkPackages?: WorkPackage;
    projectName?: Project;
    timesheetRows?: any;
    employeeWorkPackageAssignments?: any;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
}