export interface timesheet {
    timesheetId: number;
    versionNumber: number;
    employeeId: number;
    weekNumber: number;
    weekEndingIn: Date;
    status: string;
    signature?: any;
}