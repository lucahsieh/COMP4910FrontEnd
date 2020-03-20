import { TimesheetRow } from './TimesheetRow';
import { Employee } from './Employee';

/** this class is for Timesheet component model */
export class Timesheet {
    constructor() {
        this.timesheetRows = [];
        this.signature = null;
        this.comment = '';
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
}

