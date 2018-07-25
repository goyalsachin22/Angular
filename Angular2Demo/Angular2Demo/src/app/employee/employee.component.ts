import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    firstName: string = "Sachin";
    lastName: string = "Goyal";
    gender: string = "Male";
    age: number = 20;
    columnSpan: number = 2;
}


//Options for Styling angular components
//    1. Styles in external stylesheet : styles.css, specified in index.html
//    2. Styles inline in the component HTML file
//    3. Styles in the component html file using <style> tag
//    4. specify the styles using the @component decorator styles property
//    5. specify the styles using the @component decorator styleUrls property