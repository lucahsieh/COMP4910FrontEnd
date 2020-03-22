import { PMPlanning } from './PMPlanning';
import { Employee } from './Employee';

export class WorkPackage {
    workPackageId: number;
    projectCode: number;
    projectName: string;
    parentWorkPackageCode: string;
    responsibleEngineer: Employee;
    employees: Employee[];
    workPackageCode: string;
    workPackageTitle: string;
    contractor: string;
    issueDate: string;
    isClosed: boolean;
    parentWorkPackageId: number;
    childrenWorkPackages?: WorkPackage;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
    pmPlannings: PMPlanning[];
    name: string;
}