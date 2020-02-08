/** this class is for Timesheet component model */
export class TimesheetRow {
    constructor() {
        this.monday = 0;
        this.tuesday = 0;
        this.wednesday = 0;
        this.thursday = 0;
        this.friday = 0;
        this.saturday = 0;
        this.sunday = 0;

    }
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