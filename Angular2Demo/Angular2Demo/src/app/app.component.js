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
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
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
            template: " <my-employee></my-employee>\n                    <button style='color:red' [style.fontWeight]=\"isBold?'bold':'normal'\">My Button</button>\n                    <br/><br/>\n                    <button [style.font-size.px]=\"fontSize\">My Button</button>\n                     <br/><br/>\n                    <button [ngStyle]=\"getStyle()\">My Button</button>\n                    <div>\n                    <button (click)='onClick()'>Click Me</button>\n                    <button on-click='onClick()'>Canonical form of event binding</button>\n                    <h1>{{pageHeader ?  pageHeader : 'No Header'}}</h1>\n                      \n                        {{'Full Name: '+ getFullName()}}\n                        <button [disabled]='isDisabled'>Click Me </button>\n                        <span [innerHtml]='firstName'></span>\n                        <span bind-innerHtml='firstName'></span>\n                        <div [innerHtml]='badHtml'></div>\n                        <div>\n                           <input id='inputId' type='text' value='Tom'>\n                        </div>\n                        <img src='{{ImageSource}}'/>  \n                        <img [src]='ImageSource2'/>\n                        <img src='https://pbs.twimg.com/profile_images/590149318071353345/{{ImageSource3}}'/>\n                  </div>"
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
//# sourceMappingURL=app.component.js.map