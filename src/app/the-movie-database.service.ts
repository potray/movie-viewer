import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Movie} from './movie/movie';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TheMovieDatabaseService {

  private API_KEY = 'YOUR_API_KEY';
  private API_URL = 'http://api.themoviedb.org/3';
  private IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  constructor (private http: Http) { }

  public getMostPopularMovies (): Observable<Movie[]> {
    const url = `${this.API_URL}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}`;
    return this.http.get(url)
      .map((response: Response) => {
        const movies: Movie[] = [];
        const data = response.json().results;
        for (let i = 0; i < data.length; i++) {
          const rawMovie = data[ i ];
          movies.push(new Movie(rawMovie.title, `${this.IMAGE_BASE_URL}${rawMovie.poster_path}`,
            rawMovie.overview, rawMovie.vote_average));
        }
        return movies;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
