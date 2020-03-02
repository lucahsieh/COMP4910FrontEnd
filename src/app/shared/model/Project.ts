import { Employee } from './Employee';
import { WorkPackage } from './WorkPackage';

export class Project {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectManager: Employee;
    startDate: Date;
    endDate: Date;
    employeeProjectAssignments?: any;
    workPackages?: WorkPackage;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
    projectCode: string;
}