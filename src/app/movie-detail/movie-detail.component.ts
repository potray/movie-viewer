import {Component, OnInit} from '@angular/core';
import * as fromRoot from '../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../movie/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.css' ]
})
export class MovieDetailComponent implements OnInit {

  movie: Observable<Movie>;

  constructor (private store: Store<fromRoot.State>) {
    this.movie = store.select(fromRoot.selectMovieInDetail);
  }

  ngOnInit () {
  }

}
