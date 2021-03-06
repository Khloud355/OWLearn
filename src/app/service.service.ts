import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  showContactUs: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }
}
