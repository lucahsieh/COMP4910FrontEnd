import { Employee } from './employee';
import { WorkPackage } from './WorkPackage';

export class Project {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectManagerId: number;
    startDate: Date;
    endDate: Date;
    employeeProjectAssignments?: any;
    workPackages?: WorkPackage;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
}