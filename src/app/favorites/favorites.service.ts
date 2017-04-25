import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'; // tslint:disable-line
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LocalStorageService } from 'angular-2-local-storage';

import { Movie } from '../movies/shared/movie.model';

@Injectable()
export class FavoritesService {

  constructor(private localStorageService: LocalStorageService) {}

  /**
  * Get a list of favorite Movies.
  * @returns Returns a Observable object of type <Movie[]> (array of Movie).
  */
  getFavoritesMovies(): Observable<Movie[]> {
    const movies: Movie[] = [];
    const keys: any[] = this.localStorageService.keys();

    for (let i = 0; i < keys.length; i++) {
      const ls: any = this.localStorageService.get(keys[i]);
      const movie: Movie = new Movie();

      movie.unit = ls.unit;
      movie.id =  ls.id;
      movie.title = ls.title;
      movie.poster = ls.poster;
      movie.summary = ls.summary;
      movie.director = ls.director;
      movie.rating = ls.rating;
      movie.category = ls.category;
      movie.year = ls.year;
      movie.cast = ls.cast;

      movies.push(movie);
    }

    return <Observable<Movie[]>>Observable.from([movies]);
  }
}
