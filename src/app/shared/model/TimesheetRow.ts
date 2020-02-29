/** this class is for Timesheet component model */
export class TimesheetRow {
    constructor(tsId: number, version: number, projectId: number, wpId: number) {
        this.monday = 0;
        this.tuesday = 0;
        this.wednesday = 0;
        this.thursday = 0;
        this.friday = 0;
        this.saturday = 0;
        this.sunday = 0;
        this.projectId = projectId;
        this.timesheetVersionNumber = version;
        this.workPackageId = wpId;
        this.timesheetId = tsId;


    }
    timesheetId: number;
    projectId: number;
    projectName: string;
    workPackageId: number;
    workPackageCode: string;
    pwName: string;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
    timesheetVersionNumber: number;
}