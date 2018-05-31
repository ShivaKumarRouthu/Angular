import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    let number = Observable.interval(1000);
    this.numberObsSubscription = number.subscribe((number: Number) => {
      console.log(number);
    });


    const myObserver = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('First Data');
      }, 1000);

      setTimeout(() => {
        observer.next('Second Data');
      }, 2000);

      setTimeout(() => {
        observer.next('Final Data');
        observer.complete();
      }, 5000);

    });

    this.customObsSubscription = myObserver.subscribe(
      (data: string) => { console.log(data);},
      (error: Error) => { console.log(error);},
      () => { console.log('Completed');}
    );

  }

  ngOnDestroy(){
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
