import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SService {
  constructor() {}

  public data$ = new Subject();
}
