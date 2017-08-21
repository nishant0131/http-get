import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService{
    constructor(private _http: Http){}
    //    private _url: string = "http://www.petofy.com/apidata/get-user.php?type=login";
 
    getEmployees(){
        return this._http.get('src/apidata/employeedata.json')
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