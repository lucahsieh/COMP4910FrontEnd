import { TimesheetRow } from './TimesheetRow';

/** this class is for Timesheet component model */
export interface Timesheet {
    timesheetId: number;
    versionNumber: number;
    employeeId: number;
    weekNumber: number;
    weekEnding: string;
    status: string;
    signature?: any;
    timesheetRows: TimesheetRow[];
}