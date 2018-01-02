import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { MeepoCache } from '../../src/app/app';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MeepoCache {
  constructor(
    public store: StoreService,
    public cd: ChangeDetectorRef,
    public title: Title
  ) { 
    super(store,cd,title);
  }
}
