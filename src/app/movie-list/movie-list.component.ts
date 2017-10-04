import {Component, OnInit} from '@angular/core';
import {TheMovieDatabaseService} from '../the-movie-database.service';
import {Store} from '@ngrx/store';
import * as MovieActions from '../movie/movie-actions';
import * as fromRoot from '../reducers';
import {Movie} from '../movie/movie';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.css' ]
})
export class MovieListComponent implements OnInit {

  movies: Observable<Movie[]>;
  selectedMovie: Observable<Movie>;

  constructor (private theMovieDatabaseService: TheMovieDatabaseService,
               private store: Store<fromRoot.State>) {
    this.movies = store.select(fromRoot.selectPopularMovies);
    this.selectedMovie = store.select(fromRoot.selectMovieInDetail);
  }

  ngOnInit () {
    this.theMovieDatabaseService.getMostPopularMovies()
      .subscribe(movies => this.store.dispatch(new MovieActions.LoadPopularMovies(movies)));
  }

  selectMovie (movie: Movie) {
    this.store.dispatch(new MovieActions.SelectMovie(movie));
  }

}
