import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter/counter.actions';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter-demo';

  count$: Observable<number>;

  constructor(private store: Store<{ counter: { count: number } }>) {
    try{
    this.count$ = store.pipe(select((state) => { console.log(state); return state.counter.count}));

    } catch (error) {
      console.error('Error initializing count$: ', error);
      this.count$ = new Observable<number>(observer => {
        observer.next(0); // Fallback value
        observer.complete();
      });
    }
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
