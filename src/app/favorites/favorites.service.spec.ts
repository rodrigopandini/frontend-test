/* tslint:disable:no-unused-variable */

import { async, getTestBed, TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from 'angular-2-local-storage';

import { FavoritesService } from './favorites.service';
import { Movie } from '../movies/shared/movie.model';

function createMookMovies(count: number = 1): Array<Movie> {
  const movies: Array<Movie> = [];
  for (let i = 0; i < count; i++) {
    const movie = new Movie();
    movie.unit = i;
    movie.id = i;
    movie.title = 'Title Test ' + i;
    movie.poster = 'poster-test-' + i + '.jpg';
    movie.summary = 'Summary Test ' + i;
    movie.director = 'Director Test ' + i;
    movie.rating = 5;
    movie.category = 'Category Test ' + i;
    movie.year = 2000 + i;
    movie.cast = ['A', 'B', 'C'];

    movies.push(movie);
  }
  return movies;
}

describe('FavoritesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LocalStorageService, useFactory: createMookMovies }
      ]
    });
  });

  describe('#getFavoritesMovies()', () => {
    it('should return an Observable<Movie[]>',
      inject([FavoritesService], (favoritesService) => {
        favoritesService.getFavoritesMovies()
                        .subscribe(
                          movies => {
                            expect(movies.length).toBe(4);
                          }
                        );
      }));
  });
});
