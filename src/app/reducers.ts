import * as fromMovie from './movie/movie-reducer';

export interface State {
  movies: fromMovie.State;
}

export const reducers = {
  movies: fromMovie.reducer
};

export function selectPopularMovies (state: State) {
  return state.movies.results;
}

export function selectMovieInDetail (state: State) {
  return state.movies.movieInDetail;
}
