"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_activatedRoute, _employeeService, _router) {
        this._activatedRoute = _activatedRoute;
        this._employeeService = _employeeService;
        this._router = _router;
        this.statusMessage = "Loading data please wait";
    }
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "No employee with this id";
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = "Error reaching out service, please try again after some time";
            console.log(error);
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            employee_service_1.EmployeeService,
            router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//Options for Styling angular components
//    1. Styles in external stylesheet : styles.css, specified in index.html
//    2. Styles inline in the component HTML file
//    3. Styles in the component html file using <style> tag
//    4. specify the styles using the @component decorator styles property
//    5. specify the styles using the @component decorator styleUrls property
//# sourceMappingURL=employee.component.js.map