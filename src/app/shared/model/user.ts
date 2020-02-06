
/**
 * This class represents a logged in user.
 * Should match the response of
 */
export interface User {
    credentialId: string;
    password: string;
    token: string;
    employeeId: string;
    firstName: string;
    jobTitle: string,
    lastName: string;
    isActive: boolean;
    supervisorId?: any;
    timesheetApproverId?: any;
}
