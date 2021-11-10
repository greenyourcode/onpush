import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SService } from '../s.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent implements OnInit {
  a: number = 0;
  @Input() myInput: any;

  get title(): string {
    console.log('A');
    return 'A';
  }

  constructor(private service: SService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // requestAnimationFrame(() => this.ngOnInit())
    this.service.data$.subscribe((res) => {
      console.log('markforcheck');
      this.a = 2;
      this.cd.markForCheck();
    });
  }

  click() {
    // this.a = 1;
    console.log('changes');
  }
}
