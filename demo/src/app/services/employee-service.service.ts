import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../interface/emp';
import {Observable, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url :string = 'assets/employee.json';

  constructor(private http:HttpClient) {
   
  }

  getEmployees() {
    return [{
      id: 1, "name": "John", age: 35
    },
    {
      id: 2, "name": "James", age: 31
    },
    {
      id: 3, "name": "Jeena", age: 32
    },
    {
      id: 4, "name": "Jim", age: 34
    }
      , {
      id: 5, "name": "Jack", age: 33
    },
    {
      id: 6, "name": "John", age: 35
    }]
  }

  getEmpDetails():Observable<IEmployee> {
    return this.http.get<IEmployee>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(() => new Error(error.message));
  }
}
