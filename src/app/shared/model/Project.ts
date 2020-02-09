import { Employee } from './employee';

export class Project {
    employeeId: number;
    jobTitleId: number;
    employeeFirstName: string;
    employeeLastName: string;
    isActivated: boolean;
    timesheetApproverId: number;
    supervisorId: number;
    isProjectManager: boolean;
    isAdmin: boolean;
    isHumanResources: boolean;
    timesheetApprover: Employee;
    supervisor: Employee;
    jobTitle?: any;
    timesheets?: any;
    employeeProjectAssignments?: any;
    employeeWorkPackageAssignments?: any;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
}