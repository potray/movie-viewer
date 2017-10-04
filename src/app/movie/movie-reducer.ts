import {Movie} from './movie';
import * as MovieActions from './movie-actions';

export interface State {
  results: Movie[];
  movieInDetail: Movie;
}

const initialState: State = {
  results: [],
  movieInDetail: new Movie('', '', '', 0)
};

export function reducer (state = initialState, action: MovieActions.All): State {
  switch (action.type) {
    case MovieActions.LOAD_POPULAR_MOVIES:
      return {
        ...state,
        results: action.payload
      };
    case MovieActions.OPEN_MOVIE_DETAIL:
      return {
        ...state,
        movieInDetail: action.payload
      };
    default:
      return state;
  }
}
