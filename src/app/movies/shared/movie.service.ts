import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LocalStorageService } from 'angular-2-local-storage';

import { APP_CONFIG, IAppConfig } from '../../core';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {

  constructor(private http: Http,
              private localStorageService: LocalStorageService,
              @Inject(APP_CONFIG) private config: IAppConfig) {}

  /**
  * Get the Movie by title.
  * @param title The title of movie to be get.
  * @returns Returns a Observable object of type <Movie>.
  */
  getMovieByTitle(title: string): Observable<Movie> {
    const url = `${this.config.apiEndpoint}?title=${title}`;

    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  /**
  * Get a list of Movies by director.
  * @param director The director of movies to be get.
  * @returns Returns a Observable object of type <Movie[]> (array of Movie).
  */
  getMoviesByDirector(director: string): Observable<Movie[]> {
    const url = `${this.config.apiEndpoint}?director=${director}`;

    return this.http.get(url)
                    .map(this.extractDataList)
                    .catch(this.handleError);
  }

  /**
  * Save selected movie to favorites.
  * @param movie The movie to be saved.
  */
  saveToFavorites(movie: Movie): boolean {
    const ls: any = this.localStorageService.get(movie.id.toString());

    if (ls) {
      return this.localStorageService.remove(movie.id.toString());
    } else {
      return this.localStorageService.set(movie.id.toString(), movie);
    }
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    const body = res.json();
    const movie: Movie = new Movie();

    movie.unit = body.unit;
    movie.id =  body.show_id;
    movie.title = body.show_title;
    movie.poster = body.poster;
    movie.summary = body.summary;
    movie.director = body.director;
    movie.rating = body.rating;
    movie.category = body.category;
    movie.year = body.release_year;
    movie.cast = body.show_cast;

    return movie;
  }

  private extractDataList(res: Response) {
    return res.json().map((body: any) => {
      const movie: Movie = new Movie();

      movie.unit = body.unit;
      movie.id =  body.show_id;
      movie.title = body.show_title;
      movie.poster = body.poster;
      movie.summary = body.summary.length > 80 ?
                        body.summary.substring(0, 80).concat('...') :
                        body.summary;
      movie.director = body.director;
      movie.rating = body.rating;
      movie.category = body.category;
      movie.year = body.release_year;
      movie.cast = body.show_cast;

      return movie;
    });
  }
}
