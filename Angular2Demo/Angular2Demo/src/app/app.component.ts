import { Component } from "@angular/core"
import { fail } from "assert";
import { Interpolation, PropertyBindingType } from "../../node_modules/@angular/compiler";
import { transition } from "../../node_modules/@angular/core/src/animation/dsl";

@Component({
    selector: 'my-app',
    template: ` <my-employee></my-employee>
                    <button style='color:red' [style.fontWeight]="isBold?'bold':'normal'">My Button</button>
                    <br/><br/>
                    <button [style.font-size.px]="fontSize">My Button</button>
                     <br/><br/>
                    <button [ngStyle]="getStyle()">My Button</button>
                    <div>
                    <button (click)='onClick()'>Click Me</button>
                    <button on-click='onClick()'>Canonical form of event binding</button>
                    <h1>{{pageHeader ?  pageHeader : 'No Header'}}</h1>
                      
                        {{'Full Name: '+ getFullName()}}
                        <button [disabled]='isDisabled'>Click Me </button>
                        <span [innerHtml]='firstName'></span>
                        <span bind-innerHtml='firstName'></span>
                        <div [innerHtml]='badHtml'></div>
                        <div>
                           <input id='inputId' type='text' value='Tom'>
                        </div>
                        <img src='{{ImageSource}}'/>  
                        <img [src]='ImageSource2'/>
                        <img src='https://pbs.twimg.com/profile_images/590149318071353345/{{ImageSource3}}'/>
                  </div>`
})
export class AppComponent {
    pageHeader: string = null;
    ImageSource: string = "https://www.w3schools.com/angular/pic_angular.jpg";
    ImageSource2: string = "https://pbs.twimg.com/profile_images/590149318071353345/4EqHKAGD_400x400.png";
    ImageSource3: string = '4EqHKAGD_400x400.png';
    firstName: string = "Sachin";
    lastName: string = "Goyal";
    isDisabled: boolean = true;
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';

    //Method declaration syntex
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    getStyle() {
        let style = {
            'font-size.px': this.fontSize,
            'font-weight': this.isBold ? 'Bold' : 'normal',
            'font-style': this.isItalic ? 'italic':'normal',
        }
        return style;
    }

    onClick(): void {
        console.log('Button Clicked');
    }
}

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