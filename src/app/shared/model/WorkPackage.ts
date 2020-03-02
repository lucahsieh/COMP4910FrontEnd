import { Project } from './Project';
import { Employee } from './Employee';

export class WorkPackage {
    workPackageId: number;
    projectId: number;
    responsibleEngineer: Employee;
    engineers: Employee[];
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