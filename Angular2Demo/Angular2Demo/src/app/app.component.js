"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = null;
        this.ImageSource = "https://www.w3schools.com/angular/pic_angular.jpg";
        this.ImageSource2 = "https://pbs.twimg.com/profile_images/590149318071353345/4EqHKAGD_400x400.png";
        this.ImageSource3 = '4EqHKAGD_400x400.png';
        this.firstName = "Sachin";
        this.lastName = "Goyal";
        this.isDisabled = true;
        this.badHtml = 'Hello <script>alert("Hacked");</script> World';
    }
    //Method declaration syntex
    AppComponent.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h1>{{pageHeader ?  pageHeader : 'No Header'}}</h1>\n                        <img src='{{ImageSource}}'/>  \n                        <img [src]='ImageSource2'/>\n                        <img src='https://pbs.twimg.com/profile_images/590149318071353345/{{ImageSource3}}'/>\n                        <my-employee></my-employee>\n                        {{'Full Name: '+ getFullName()}}\n                        <button [disabled]='isDisabled'>Click Me </button>\n                        <span [innerHtml]='firstName'></span>\n                        <span bind-innerHtml='firstName'></span>\n                        <div [innerHtml]='badHtml'></div>\n                  </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Angular interpolation
//DataBinding  Description
//one way data-binding(From component to Viewtemplate)
//one way data-binding(From Viewtemplate to component)
//Two way data - binding(From component to Viewtemplate & From View template to Component)
//Interpolation examples
//    < h1 > {{firstName}} </h1>
//   <h1> {{'Name= ' + firstName}} </h1>
//    <h1> {{ 10 + 20 + 30 }} </h1>
//    <h1> {{ firstName ? firstname : "No name specified"}} </h1>
//    <img src='{{imagePath}}'/>
//    <h1>{{'Full Name = ' + getFullName()}} </h1>
// Interpolation <img src='{{imagepath}}' />       Property Binding <img [src]='imagePath'/>
/*Interpolation vs PropertyBinding
 * Interpolation is a special syntex that Angular converts into a property binding
 * To concatenate strings we must use interpolation insted of property binding
 * e.g. <img src='http://someimagepath.com/{{imagepath}}'/>
 * To set an element property to a non-string data type, you must use property binding
 * <button [disabled]='isDisabled'>Click Me</button>
 *
 * Property Binding
 * Remember to enclose the property name with a pair of square brackets
 * Canonical form <button bind-disabled='isDisabled'>Click Me</button>
 * Angular data binding sanitizes malicious content before displaying it
 
 
//# sourceMappingURL=app.component.js.map