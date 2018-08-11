import { Injectable } from '@angular/core';

@Injectable()
export class userPreferencesService {
    colorPreferences: string = "orange";
    constructor() {
        console.log("new instance of userPreference Service Created");
    }
}
