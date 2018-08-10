import { Injectable } from '@angular/core'
import { IEmployee } from './Employee';
import { Http , Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {

    }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:59712/api/Employee/")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(empcode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:59712/api/Employee/" + empcode)
            .map((response: Response) => <IEmployee> response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
