import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef
} from '@angular/core';

// import "../../src/app/rxjs/AsyncSubject";
// import "../../src/app/rxjs/mapTo";
import "../../src/app/rxjs/switchMap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }
  ngOnInit() {
    
  }
}
