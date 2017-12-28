import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RunnerOrderService, RunnerAppService } from '../../src/app/app';
import { Subject } from 'rxjs/Subject';
import { Widget } from '../../src/app/service/order';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public order: RunnerOrderService,
    public app: RunnerAppService
  ) { 

  }

  ngOnInit() {
    this.app.init();
  }
}
