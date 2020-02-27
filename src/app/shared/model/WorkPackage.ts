import { Project } from './Project';

export class WorkPackage {
    workPackageId: number;
    projectId: number;
    responsibleEngineerId: number;
    workPackageCode: string;
    name: string;
    description: string;
    proposedHours: number;
    budgetHours: number;
    issueDate: Date;
    isClosed: boolean;
    parentWorkPackageId: number;
    parentWorkPackage?: WorkPackage;
    childrenWorkPackages?: WorkPackage;
    project?: Project;
    timesheetRows?: any;
    employeeWorkPackageAssignments?: any;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
}