import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '22/04/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '24/04/1991' }
        ];
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '22/04/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '24/04/1991' },
            { code: 'emp103', name: 'Prateek Jaitwal', gender: 'Male', annualSalary: 10000, DOB: '31/01/1988' }
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}