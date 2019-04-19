import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private _url: string = "/assets/data/employees.json";

  private _url: string = "http://127.0.0.1:5002/forecast";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
