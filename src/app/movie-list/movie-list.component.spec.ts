import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {TheMovieDatabaseService} from '../the-movie-database.service';
import {StoreModule, Store} from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromMovies from '../movie/movie-reducer';
import * as Data from '../movie/movie-actions';
import {HttpModule} from '@angular/http';
import {Movie} from '../movie/movie';
import {By} from '@angular/platform-browser';

const movie1 = new Movie('Movie1', 'fakeURL1', 'overview1', 1);
const movie2 = new Movie('Movie2', 'fakeURL2', 'overview2', 2);
const movie3 = new Movie('Movie3', 'fakeURL3', 'overview3', 3);

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let store: Store<fromMovies.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      providers: [
        TheMovieDatabaseService
      ],
      imports: [
        HttpModule,
        StoreModule.forRoot({
          ...fromRoot.reducers
        })
      ]
    })
      .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should render a movie list', () => {
    const mockMovies = [ movie1, movie2, movie3 ];
    const action = new Data.LoadPopularMovies(mockMovies);
    store.dispatch(action);

    component.movies.subscribe(movies => {
      fixture.detectChanges();
      expect(movies.length).toBe(mockMovies.length);
      const list = fixture.debugElement.query(By.css('ul')).nativeElement;
      for (let i = 0; i < list.children.length; i++) {
        const child = list.children[ i ];
        expect(child.textContent).toBe(mockMovies[ i ].title);
      }
    });
  });

  it('Should highlight the selected movie in the list', () => {
    const mockMovies = [ movie1, movie2, movie3 ];
    const indexToSelect = 2;
    const loadPopularMoviesAction = new Data.LoadPopularMovies(mockMovies);
    const selectMovieAction = new Data.SelectMovie(mockMovies[ indexToSelect ]);
    store.dispatch(loadPopularMoviesAction);
    store.dispatch(selectMovieAction);

    component.selectedMovie.subscribe(movie => {
      fixture.detectChanges();

      expect(movie).toBe(mockMovies[indexToSelect]);

      const list = fixture.debugElement.query(By.css('ul')).nativeElement;
      const selectedElement = list.children[ indexToSelect ];
      expect(selectedElement.classList).toContain('selected');
    });
  });
});
