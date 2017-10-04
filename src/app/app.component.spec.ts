import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {TheMovieDatabaseService} from './the-movie-database.service';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

import {Action, Store} from "@ngrx/store";
import {Subject} from "rxjs/Subject";

export function mockStore<T> ({actions = new Subject<Action>(), states = new Subject<T>()}: {
  actions?: Subject<Action>, states?: Subject<T>
}): Store<T> {
  const result = states as any;
  result.dispatch = (action: Action) => actions.next(action);
  return result;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieListComponent,
        MovieDetailComponent
      ],
      providers: [
        TheMovieDatabaseService,
      ],
      imports: [
        HttpModule,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
