import { Employee } from './Employee';
import { WorkPackage } from './WorkPackage';
import { SelectItem } from 'primeng/api';

export class Project {

    constructor() {
        this.projectId=null;
        this.projectName="";
        this.budget=0;
        this.description="";
        this.projectManager = new Employee();
        this.teamMembers = [];
        this.startDate=null;
        this.endDate=null;
        this.isClosed=false;
        this.employees=[];
    };
    projectId: number;
    projectName: string;
    description: string;
    budget: number;
    projectManager: Employee;
    teamMembers: any[];
    startDate: Date;
    endDate: Date;
    employeeProjectAssignments?: any;
    workPackages?: WorkPackage;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
    projectCode: number;
    isClosed: boolean;
    employees: string[];
}