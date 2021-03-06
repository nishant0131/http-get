import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService{
    constructor(private _http: Http){}
       private _url: string = "src/apidata/employeedata.json";
 
    getEmployees(){
        return this._http.get(this._url)
        // .subscribe(
        //     (data) => console.log(data)
        // )
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}