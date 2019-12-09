import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { SetMode } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public mode$: Observable<string>;

  @ViewChild('editorArea', {static: false}) editorArea: ElementRef;

  private keypress: Subscription;

  constructor(private store: Store<{ count: number }>) {
    this.mode$ = this.store.pipe(select('mode'));
  }

  ngAfterViewInit(): void {
    this.keypress = fromEvent(document, 'keydown').subscribe((event: KeyboardEvent) => {
      if (event.key === 'i') {
        this.store.dispatch(new SetMode('insert'));
      } else if (event.key === 'n' || event.key === 'Escape') {
        this.store.dispatch(new SetMode('normal'));
      } else if (event.key === 'v') {
        this.store.dispatch(new SetMode('visual'));
      }
    });
  }
}
