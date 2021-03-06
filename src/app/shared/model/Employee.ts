import { LabourGrade } from './LabourGrade';

export class Employee {
    constructor() {
        this.employeeId = null;
        this.empUsername = "";
        this.empPassword = "";
        this.empCode = 1;
        this.labourGrade = new LabourGrade();
        this.empFirstName = "";
        this.empLastName = "";
        this.timesheetApproverId = 1;
        this.supervisorId = 1;
        this.isProjectManager = false;
        this.isAdmin = false;
        this.isHumanResources = false;
        this.isActivated = true;
        this.timesheetApprover = null;
        this.supervisor = null;
        this.jobTitleId = 1;
    };
    employeeId: number;
    empUsername: string;
    empPassword: string;
    empCode: number;
    jobTitleId: number;
    labourGrade: LabourGrade;
    empFirstName: string;
    empLastName: string;
    timesheetApproverId: number;
    supervisorId: number;
    isProjectManager: boolean;
    isAdmin: boolean;
    isHumanResources: boolean;
    isActivated: boolean;
    timesheetApprover: Employee;
    supervisor: Employee;
}
