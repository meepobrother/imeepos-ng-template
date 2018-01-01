import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef,
} from '@angular/core';
import { TestAdvComponent } from '../../src/app/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('testAdv') testAdvComponent: TestAdvComponent;
  constructor() { }
  ngOnInit() {
    console.log(this.testAdvComponent);
    this.testAdvComponent.meepoOnAddItem({
      title: 'title',
      image: 'image',
      link: 'link'
    }).subscribe(res => {
      console.log(res);
    });
  }
}
