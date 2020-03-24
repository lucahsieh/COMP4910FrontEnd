import { TimesheetRow } from './TimesheetRow';
import { Employee } from './Employee';

/** this class is for Timesheet component model */
export class Timesheet {
    constructor() {
        this.timesheetRows = [];
        this.signature = null;
        this.comment = '';
        this.flexTime = 0;
        this.overTime = 0;
    }
    timesheetId: number;
    versionNumber: number;
    employeeId: number;
    weekNumber: number;
    weekEndingIn: string;
    status: string;
    signature?: any;
    timesheetRows: TimesheetRow[];
    owner: Employee;
    comment: string;
    flexTime: number;
    overTime: number;

}

