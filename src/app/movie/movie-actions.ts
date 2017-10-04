import {Movie} from './movie';
import {Action} from '@ngrx/store';

export const LOAD_POPULAR_MOVIES = '[Movie] Load popular movies';
export const OPEN_MOVIE_DETAIL = '[Movie] Open movie detail';

export class LoadPopularMovies implements Action {
  readonly type = LOAD_POPULAR_MOVIES;

  constructor (public payload: Movie[]) {}
}

export class SelectMovie implements Action {
  readonly type = OPEN_MOVIE_DETAIL;

  constructor (public payload: Movie) {}
}

export type All = LoadPopularMovies | SelectMovie;
