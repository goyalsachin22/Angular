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
        this.name = 'Sachin';
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
        this.userText = 'Pragim';
    }
    //Method declaration syntex
    AppComponent.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    AppComponent.prototype.getStyle = function () {
        var style = {
            'font-size.px': this.fontSize,
            'font-weight': this.isBold ? 'Bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
        };
        return style;
    };
    AppComponent.prototype.onClick = function () {
        console.log('Button Clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                    <ul class=\"nav nav-tabs\">\n                        <li routerLinkActive=\"active\"> <a  routerLink=\"home\">Home</a> </li>\n                        <li routerLinkActive=\"active\"> <a routerLink=\"employees\">Employee</a> </li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"bootstrap\">BootStrap</a></li>\n                    </ul>\n                    <router-outlet></router-outlet>\n               "
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
 */
/*HTML Element Attribute vs Dom Property
 * attributes are defined by HTML, where as properties are defined by the DOM
 * Attributes initilize DOM Properties, once the initialization complete, the attribute job is done
 * property value can change, where as attribute value can't change
 *
 *Important Points
 * HTML attributes and the DOM properties are different things
 * Angular binding works with properties and events, and not attributes
 * <button [disabled]='isDisabled'>Click Me</button>
 * disabled is DOM Property, and not attribute
 * <button disabled='{{isDisabled}}'>Click Me</button>
 */
/* Two way dataBinding
 * Name: <input [value]='name' (input)='name=$event.target.value'/>
   Name: <input [(ngModel)]='name'/> (Need change in app.module.ts)
*/ 
//# sourceMappingURL=app.component.js.map