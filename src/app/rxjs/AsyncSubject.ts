import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subject } from 'rxjs/Subject';

let asyncSubject: AsyncSubject<any> = new AsyncSubject();

asyncSubject.subscribe(res=>{
    console.log(res);
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);

asyncSubject.subscribe(res=>{
    console.log(res);
});

let subject: Subject<any> = new Subject();

subject.subscribe(res=>{
    console.log(res);
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);