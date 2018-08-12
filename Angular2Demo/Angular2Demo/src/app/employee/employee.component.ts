import { Component, OnInit } from '@angular/core'
import { IEmployee } from './Employee'
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    employee: IEmployee;
    statusMessage: string = "Loading data please wait";
    constructor(private _activatedRoute: ActivatedRoute,
                private _employeeService: EmployeeService,
                private _router: Router) {

    }

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).then(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "No employee with this id";
                } else {
                    this.employee = employeeData;
                }
            }
        ).catch((error) => {
            this.statusMessage = "Error reaching out service, please try again after some time";
            console.log(error);

        });
    }


}


//Options for Styling angular components
//    1. Styles in external stylesheet : styles.css, specified in index.html
//    2. Styles inline in the component HTML file
//    3. Styles in the component html file using <style> tag
//    4. specify the styles using the @component decorator styles property
//    5. specify the styles using the @component decorator styleUrls property