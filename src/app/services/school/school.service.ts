import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { School } from 'src/app/models/School';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private jsonUrl = 'http://localhost:3000/schools';

  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.jsonUrl);
  }

  createSchool(): Observable<School[]> {

    return this.http.get<School[]>(this.jsonUrl);
  }
}
