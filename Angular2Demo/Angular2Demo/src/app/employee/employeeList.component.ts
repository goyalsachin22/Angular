import { Component , OnInit } from '@angular/core';
import { IEmployee } from './Employee'
import { EmployeeService} from './employee.service'
import { EmployeeTitlePipe } from './employeeTitle.pipe';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

   
    employees: IEmployee[];
    private _employeeService: EmployeeService;

    constructor(_employeeService: EmployeeService) {
        this._employeeService = _employeeService;
       
    }

    ngOnInit(): void {
      //ngOnInit run after the constructor
      // Best place for components initialization, service calls & fetch data from remoteServer
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData);
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '04/22/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '04/24 /1991' },
            { code: 'emp103', name: 'Prateek Jaitwal', gender: 'Male', annualSalary: 10000, DOB: '01/31/1988' },
            { code: 'emp104', name: 'Kartik Kumar', gender: 'Male', annualSalary: 20000, DOB: '01/27/1990' },
            { code: 'emp104', name: 'Adyasha Pruti', gender: 'Female', annualSalary: 15700, DOB: '04/23/1993' },
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Female").length;
    }

    selectedEmployeeCountRadioButton: string = 'All';
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}