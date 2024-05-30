import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInServiceService {
  public isLoggedIn:  BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  constructor() { }
}
