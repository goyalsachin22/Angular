import { Component } from '@angular/core';
import { userPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>This is home page</h1>
                <div>
                  Color Preference: 
                   <input type='text'  [(ngModel)]='colour'  [style.background]='colour'/>
                </div>
                `
})

export class HomeComponent {
    constructor(private _userPreferences: userPreferencesService) {
       
    }

    get colour(): string {
        return this._userPreferences.colorPreferences;
    }

    set colour(value: string) {
        this._userPreferences.colorPreferences = value;
    }
}
