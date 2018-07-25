import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader ?  pageHeader : 'No Header'}}</h1>
                        <img src='{{ImageSource}}'/>
                        <my-employee></my-employee>
                        {{'Full Name: '+ getFullName()}}
                  </div>`
})
export class AppComponent {
    pageHeader: string = null;
    ImageSource: string = "https://www.w3schools.com/angular/pic_angular.jpg";
    firstName: string = "Sachin";
    lastName: string = "Goyal";

    //Method declaration syntex
    getFullName(): string {
        return this.firstName + " " + this.lastName;
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
