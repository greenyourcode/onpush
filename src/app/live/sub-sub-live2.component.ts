import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sub-sub-live2',
  templateUrl: './sub-sub-live2.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubSubLive2Component implements OnChanges, OnInit {
  @Input() data2: any;
  @Input() data: any;
  @Input() dataNested: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('SubSub Live2 change');
  }

}
