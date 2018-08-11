import { Component , OnInit } from '@angular/core';
import { IEmployee } from './Employee'
import { EmployeeService } from './employee.service'
import { userPreferencesService} from  './userPreferences.service'
import { EmployeeTitlePipe } from './employeeTitle.pipe';
import { error } from 'util';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    //providers: [EmployeeService] (Moved this to module level so that every component can use service)
})
export class EmployeeListComponent implements OnInit {

   
    employees: IEmployee[];

    statusMessage: string = 'Loading employees data ...';

    constructor(private _employeeService: EmployeeService,
                private _userPreferences: userPreferencesService) {
    }

    ngOnInit(): void {
      //ngOnInit run after the constructor
      // Best place for components initialization, service calls & fetch data from remoteServer
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData, (error) => {
                this.statusMessage = 'Problem with the service. Please try again after some time.';
                console.error(error);
            });
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

    get colour(): string {
        return this._userPreferences.colorPreferences;
    }

    set colour(value: string) {
        this._userPreferences.colorPreferences = value;
    }
}