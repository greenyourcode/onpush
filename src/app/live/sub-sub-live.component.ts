import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-sub-live',
  templateUrl: './sub-sub-live.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubSubLiveComponent implements OnChanges, OnInit {
  @Input() data2: any;
  @Input() data: any;
  @Input() userObs: Observable<any>;
  @Input() dataNested: any;

  constructor() { }

  ngOnInit() {
    this.userObs.subscribe((u) => {
      console.log(u);
    });
  }

  ngOnChanges() {
    console.log('SubSub Live change');
  }
}
