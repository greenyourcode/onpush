import { Component } from '@angular/core';
import { SService } from './s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: SService) {}

  title = 'onpush';
  value = {
    color: 'red',
    ssobjet: {},
  };

  changeValue() {
    this.service.data$.next(1);
  }

  changeColor() {
    // this.value.color = 'blue'; // mutable object
    this.value = {
      // non mutable object
      ...this.value,
      color: 'blue',
    };
  }
}
