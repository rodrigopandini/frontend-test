/* tslint:disable:no-unused-variable */

import { async, getTestBed, TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';

import { LocalStorageService } from 'angular-2-local-storage';

import { APP_CONFIG } from '../../core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

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

describe('MovieService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: APP_CONFIG, useValue: 'http://example.com' },
        MovieService,
        { provide: XHRBackend, useClass: MockBackend },
        LocalStorageService
      ]
    });
  });

  describe('#getMovieByTitle(title: string)', () => {
    it('should return an Observable<Movie>',
        inject([MovieService, MockBackend], (movieService, mockBackend) => {

        const mockResponse = {
          data: {
            unit: 0,
            id: 0,
            title: 'Title Test 0',
            poster: 'poster-test-0.jpg',
            summary: 'Summary Test 0',
            director: 'Director Test 0',
            rating: 5,
            category: 'Category Test 0',
            year: 2000,
            cast: ['A', 'B', 'C']
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        movieService.getMovieByTitle('Title Test').subscribe((movie) => {
          expect(movie.unit).toEqual(0);
          expect(movie.id).toEqual(0);
          expect(movie.title).toEqual('Title Test 0');
          expect(movie.poster).toEqual('poster-test-0.jpg');
          expect(movie.summary).toEqual('Summary Test 0');
          expect(movie.director).toEqual('Director Test 0');
          expect(movie.rating).toEqual(5);
          expect(movie.category).toEqual('Category Test 0');
          expect(movie.year).toEqual(2000);
          expect(movie.cast.length).toBe(3);
          expect(movie.cast[0]).toEqual('A');
          expect(movie.cast[1]).toEqual('B');
          expect(movie.cast[2]).toEqual('C');
        });

    }));
  });

  describe('#getMoviesByDirector(director: string)', () => {
    it('should return an Observable<Array<Movie>>',
        inject([MovieService, MockBackend], (movieService, mockBackend) => {

        const mockResponse = createMookMovies(4);

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        movieService.getMoviesByDirector('Director Test').subscribe((movies) => {
          expect(movies.length).toBe(4);
          // 0
          expect(movies[0].unit).toEqual(0);
          expect(movies[0].id).toEqual(0);
          expect(movies[0].title).toEqual('Title Test 0');
          expect(movies[0].poster).toEqual('poster-test-0.jpg');
          expect(movies[0].summary).toEqual('Summary Test 0');
          expect(movies[0].director).toEqual('Director Test 0');
          expect(movies[0].rating).toEqual(5);
          expect(movies[0].category).toEqual('Category Test 0');
          expect(movies[0].year).toEqual(2000);
          expect(movies[0].cast.length).toBe(3);
          expect(movies[0].cast[0]).toEqual('A');
          expect(movies[0].cast[1]).toEqual('B');
          expect(movies[0].cast[2]).toEqual('C');
          // 1
          expect(movies[1].unit).toEqual(1);
          expect(movies[1].id).toEqual(1);
          expect(movies[1].title).toEqual('Title Test 1');
          expect(movies[1].poster).toEqual('poster-test-1.jpg');
          expect(movies[1].summary).toEqual('Summary Test 1');
          expect(movies[1].director).toEqual('Director Test 1');
          expect(movies[1].rating).toEqual(5);
          expect(movies[1].category).toEqual('Category Test 1');
          expect(movies[1].year).toEqual(2001);
          expect(movies[1].cast.length).toBe(3);
          expect(movies[1].cast[0]).toEqual('A');
          expect(movies[1].cast[1]).toEqual('B');
          expect(movies[1].cast[2]).toEqual('C');
          // 2
          expect(movies[2].unit).toEqual(2);
          expect(movies[2].id).toEqual(2);
          expect(movies[2].title).toEqual('Title Test 2');
          expect(movies[2].poster).toEqual('poster-test-2.jpg');
          expect(movies[2].summary).toEqual('Summary Test 2');
          expect(movies[2].director).toEqual('Director Test 2');
          expect(movies[2].rating).toEqual(5);
          expect(movies[2].category).toEqual('Category Test 2');
          expect(movies[2].year).toEqual(2002);
          expect(movies[2].cast.length).toBe(3);
          expect(movies[2].cast[0]).toEqual('A');
          expect(movies[2].cast[1]).toEqual('B');
          expect(movies[2].cast[2]).toEqual('C');
          // 3
          expect(movies[3].unit).toEqual(3);
          expect(movies[3].id).toEqual(3);
          expect(movies[3].title).toEqual('Title Test 3');
          expect(movies[3].poster).toEqual('poster-test-3.jpg');
          expect(movies[3].summary).toEqual('Summary Test 3');
          expect(movies[3].director).toEqual('Director Test 3');
          expect(movies[3].rating).toEqual(5);
          expect(movies[3].category).toEqual('Category Test 3');
          expect(movies[3].year).toEqual(2003);
          expect(movies[3].cast.length).toBe(3);
          expect(movies[3].cast[0]).toEqual('A');
          expect(movies[3].cast[1]).toEqual('B');
          expect(movies[3].cast[2]).toEqual('C');
        });

    }));
  });

  describe('#saveToFavorites(movie: Movie)', () => {
    it('should save movie to localStorage',
        inject([MovieService, MockBackend], (movieService, mockBackend) => {

        const mockResponse = {
          data: {
            unit: 0,
            id: 0,
            title: 'Title Test 0',
            poster: 'poster-test-0.jpg',
            summary: 'Summary Test 0',
            director: 'Director Test 0',
            rating: 5,
            category: 'Category Test 0',
            year: 2000,
            cast: ['A', 'B', 'C']
          }
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        movieService.saveToFavorites('Title Test').subscribe((movie) => {
          expect(movie.unit).toEqual(0);
          expect(movie.id).toEqual(0);
          expect(movie.title).toEqual('Title Test 0');
          expect(movie.poster).toEqual('poster-test-0.jpg');
          expect(movie.summary).toEqual('Summary Test 0');
          expect(movie.director).toEqual('Director Test 0');
          expect(movie.rating).toEqual(5);
          expect(movie.category).toEqual('Category Test 0');
          expect(movie.year).toEqual(2000);
          expect(movie.cast.length).toBe(3);
          expect(movie.cast[0]).toEqual('A');
          expect(movie.cast[1]).toEqual('B');
          expect(movie.cast[2]).toEqual('C');
        });

    }));
  });

});
