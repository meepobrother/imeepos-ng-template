import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { EventService } from 'meepo-event';
import { } from '../../src/app/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public event: EventService
  ) { }
  test() {
    this.event.publish('role.change', {
      title: '管理员',
      code: 'admin',
      items: ['admin']
    });
  }
  quit() {
    this.event.publish('role.change', {
      title: '游客',
      code: 'fans',
      items: ['fans']
    });
  }
}
