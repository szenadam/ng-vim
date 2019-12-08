import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { SetMode } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mode$: Observable<string>;

  constructor(private store: Store<{ count: number }>) {
    this.mode$ = this.store.pipe(select('mode'));
  }

  public setMode(mode: string) {
    this.store.dispatch(new SetMode(mode));
  }
}
