import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { QrcodeComponent } from '../../src/app/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MeepoCache {
  _qrcode: string = 'https://meeop.com.cn/';
  constructor(
    public store: StoreService,
    public cd: ChangeDetectorRef,
    public title: Title
  ) {
    super(store, cd, title);
  }

  meepoInit() {
    setInterval(() => {
      this._qrcode += '1';
    }, 1000);
  }
}
