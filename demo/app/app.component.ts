import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { EventService } from 'meepo-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public event: EventService
  ) {
    let now = new Date();

    let version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
    this.event.checkVersion(version);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: './assets/' }).then(function (reg) {
        if (reg.installing) {
          console.log('Service worker installing');
        } else if (reg.waiting) {
          console.log('Service worker installed');
        } else if (reg.active) {
          console.log('Service worker active');
        }
      }).catch(function (error) {
        console.log('Registration failed with ' + error);
      });
    }
  }

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
