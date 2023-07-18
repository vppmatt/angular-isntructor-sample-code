import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  version = "1.0";

  getCountries() : Observable<String[]> {
      return this.http.get<string[]>("https://payments.multicode.uk/api/country")
  }
}
