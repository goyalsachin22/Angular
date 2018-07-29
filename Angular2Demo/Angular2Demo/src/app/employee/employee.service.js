"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'emp101', name: 'Sachin', gender: 'Male', annualSalary: 5500, DOB: '04/22/1988' },
            { code: 'emp102', name: 'Krati Jaitwal', gender: 'Female', annualSalary: 7500, DOB: '04/24/1991' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map