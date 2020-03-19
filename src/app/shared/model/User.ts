import { Employee } from './Employee';

/**
 * This class represents a logged in user.
 * Should match the response of
 */
export interface User {
    credentialId: string;
    password: string;
    token: string;
    employeeId: number;
    firstName: string;
    jobTitle: string;
    lastName: string;
    isActive: boolean;
    supervisorId?: any;
    timesheetApproverId?: any;


}

export function convertToEmployee(user: User) {
    let emp: Employee = new Employee();
    emp.employeeId = user.employeeId;
    emp.empFirstName = user.firstName;
    emp.empLastName = user.lastName;
    emp.isActivated = user.isActive;
    return emp;
}
