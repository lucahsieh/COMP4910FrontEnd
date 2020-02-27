import { TimesheetRow } from './TimesheetRow';

/** this class is for Timesheet component model */
export class Timesheet {
    constructor() {
        this.timesheetRows = [];
        this.signature = null;
    }
    timesheetId: number;
    versionNumber: number;
    employeeId: number;
    weekNumber: number;
    weekEnding: string;
    status: string;
    signature?: any;
    timesheetRows: TimesheetRow[];
}

