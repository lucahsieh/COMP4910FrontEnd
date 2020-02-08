/** this class is for Timesheet component model */
export interface TimesheetRow {
    projectId: number;
    projectName: string;
    pwId: number;
    pwName: string;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
}