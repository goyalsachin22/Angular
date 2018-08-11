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
var userPreferences_service_1 = require("../employee/userPreferences.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userPreferences) {
        this._userPreferences = _userPreferences;
    }
    Object.defineProperty(HomeComponent.prototype, "colour", {
        get: function () {
            return this._userPreferences.colorPreferences;
        },
        set: function (value) {
            this._userPreferences.colorPreferences = value;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        core_1.Component({
            template: "<h1>This is home page</h1>\n                <div>\n                  Color Preference: \n                   <input type='text'  [(ngModel)]='colour'  [style.background]='colour'/>\n                </div>\n                "
        }),
        __metadata("design:paramtypes", [userPreferences_service_1.userPreferencesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map