import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailComponent} from './movie-detail.component';
import {StoreModule, Store} from '@ngrx/store';
import {reducers} from '../reducers';
import {Movie} from '../movie/movie';
import {By} from '@angular/platform-browser';

import * as fromRoot from '../reducers';
import * as fromMovies from '../movie/movie-reducer';
import * as Data from '../movie/movie-actions';

const mockMovie = new Movie('Movie title', 'just fake URL', 'This is a description!', 7);

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let store: Store<fromMovies.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      providers: [],
      imports: [
        StoreModule.forRoot({...fromRoot.reducers})
      ]
    })
      .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the selected movie', () => {
    const action = new Data.SelectMovie(mockMovie);
    store.dispatch(action);

    component.movie.subscribe(movie => {
      fixture.detectChanges();
      expect(movie).toBe(mockMovie);
      const title = fixture.debugElement.query(By.css('h1')).nativeElement;
      const image = fixture.debugElement.query(By.css('img')).nativeElement;
      const overview = fixture.debugElement.query(By.css('p')).nativeElement;
      const stars = fixture.debugElement.queryAll(By.css('i'));
      expect(title.textContent).toBe(mockMovie.title);
      expect(image.src).toBe(`http://localhost:9876/${encodeURIComponent(mockMovie.imageURL)}`);
      expect(overview.textContent).toBe(mockMovie.overview);
      expect(stars[0].nativeElement.classList).toContain('filled');
      expect(stars[1].nativeElement.classList).toContain('filled');
      expect(stars[2].nativeElement.classList).toContain('filled');
      expect(stars[3].nativeElement.classList).not.toContain('filled');
      expect(stars[4].nativeElement.classList).not.toContain('filled');


    });
  });
});
