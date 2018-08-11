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
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("./userPreferences.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService, _userPreferences) {
        this._employeeService = _employeeService;
        this._userPreferences = _userPreferences;
        this.statusMessage = 'Loading employees data ...';
        this.selectedEmployeeCountRadioButton = 'All';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ngOnInit run after the constructor
        // Best place for components initialization, service calls & fetch data from remoteServer
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after some time.';
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '04/22/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '04/24 /1991' },
            { code: 'emp103', name: 'Prateek Jaitwal', gender: 'Male', annualSalary: 10000, DOB: '01/31/1988' },
            { code: 'emp104', name: 'Kartik Kumar', gender: 'Male', annualSalary: 20000, DOB: '01/27/1990' },
            { code: 'emp104', name: 'Adyasha Pruti', gender: 'Female', annualSalary: 15700, DOB: '04/23/1993' },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (x) { return x.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (x) { return x.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferences.colorPreferences;
        },
        set: function (value) {
            this._userPreferences.colorPreferences = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            userPreferences_service_1.userPreferencesService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map