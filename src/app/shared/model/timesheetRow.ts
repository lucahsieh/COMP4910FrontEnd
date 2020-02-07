/** this class is for Timesheet component model */
export interface TimesheetRow {
    projectId: number;
    projectName: string;
    pwId: number;
    pwName: string;
    hours: number[];
}