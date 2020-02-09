export class Employee {
    constructor() {
        this.employeeId = null;
        this.empUsername = "";
        this.empPassword = "";
        this.empCode = 0;
        this.labourGradeId = 0;
        this.empFirstName = "";
        this.empLastName = "";
        this.timesheetApproverId = 0;
        this.supervisorId = 0;
        this.isProjectManager = false;
        this.isAdmin = false;
        this.isHumanResources = false;
        this.isActivated = true;
        this.timesheetApprover = null;
        this.supervisor = null;
    };
    employeeId: number;
    empUsername: string;
    empPassword: string;
    empCode: number;
    jobTitleId: number;
    labourGradeId: number;
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
