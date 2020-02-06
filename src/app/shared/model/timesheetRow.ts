export interface TimesheetRow {
    timesheetId: number;
    versionNumber: number;
    employeeId: number;
    weekNumber: number;
    weekEndingIn: Date;
    status: string;
    signature?: any;
}