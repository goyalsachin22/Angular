import { Injectable } from '@angular/core'
import { IEmployee } from './Employee';

@Injectable()

export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '04/22/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '04/24/1991' }
        ];
    }
}
