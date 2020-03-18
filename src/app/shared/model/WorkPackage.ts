import { PMPlanning } from './PMPlanning';
import { Employee } from './Employee';

export class WorkPackage {
    workPackageId: number;
    projectId: number;
    projectName: string;
    responsibleEngineer: Employee;
    workers: Employee[];
    workPackageCode: string;
    workPackageTitle: string;
    contractor: string;
    issueDate: string;
    isClosed: boolean;
    parentWorkPackageId: number;
    parentWorkPackage?: WorkPackage;
    childrenWorkPackages?: WorkPackage;
    lastUpdatedBy: string;
    lastUpdatedTime: Date;
    pmPlanning: PMPlanning[];
    name: string;
    engineers: Employee[];
}