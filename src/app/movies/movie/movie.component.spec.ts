import { async, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkStubDirective } from '../../testing/router-stubs';
import { Observable } from 'rxjs'; // tslint:disable-line

import { ViewTitleService } from '../../core/view-title.service';

import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

import { MovieComponent } from './movie.component';

class MovieServiceMock {
  private createMookMovies(count: number = 1): Array<Movie> {
    const movies: Movie[] = [];
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

  getMovieByTitle(title: string): Observable<Movie> {
    return <Observable<Movie>>Observable.from(this.createMookMovies(1));
  }

  getMoviesByDirector(director: string): Observable<Movie[]> {
    return <Observable<Movie[]>>Observable.from([ this.createMookMovies(4) ]);
  }

  saveToFavorites(movie: Movie): boolean {
    return true;
  }
}

describe('MovieComponent:', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieComponent,
        RouterLinkStubDirective
      ],
      providers: [
        { provide: MovieService, useClass: MovieServiceMock },
        { provide: ActivatedRoute, useValue: { params: Observable.of({title: 'Title Test 0'})} },
        ViewTitleService
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  it('should create the component', async(() => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MovieComponent);
      const comp = fixture.componentInstance;

      expect(comp).toBeTruthy();
    });
  }));

  it('should initially have no movie', async(() => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MovieComponent);
      const comp = fixture.componentInstance;

      expect(comp.movie).toBeUndefined();
    });
  }));

  it('should initially have no errorMessage', async(() => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(MovieComponent);
      const comp = fixture.componentInstance;

      expect(comp.errorMessage).toBeUndefined();
    });
  }));

  describe('#OnInit()', () => {
    it('should get the movie (title == \'Title Test 0\')', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieComponent);
        const comp = fixture.componentInstance;

        comp.ngOnInit();

        expect(comp.movie.unit).toEqual(0);
        expect(comp.movie.id).toEqual(0);
        expect(comp.movie.title).toEqual('Title Test 0');
        expect(comp.movie.poster).toEqual('poster-test-0.jpg');
        expect(comp.movie.summary).toEqual('Summary Test 0');
        expect(comp.movie.director).toEqual('Director Test 0');
        expect(comp.movie.rating).toEqual(5);
        expect(comp.movie.category).toEqual('Category Test 0');
        expect(comp.movie.year).toEqual(2000);
        expect(comp.movie.cast.length).toBe(3);
        expect(comp.movie.cast[0]).toEqual('A');
        expect(comp.movie.cast[1]).toEqual('B');
        expect(comp.movie.cast[2]).toEqual('C');
      });
    }));
  });

  describe('#saveToFavorites()', () => {
    it('should save to localStorage', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieComponent);
        const comp = fixture.componentInstance;

        const movie = new Movie();
        movie.unit = 0;
        movie.id = 0;
        movie.title = 'Title Test 0';
        movie.poster = 'poster-test-0.jpg';
        movie.summary = 'Summary Test 0';
        movie.director = 'Director Test 0';
        movie.rating = 5;
        movie.category = 'Category Test 0';
        movie.year = 2000;
        movie.cast = ['A', 'B', 'C'];

        expect(comp.saveToFavorites(movie)).toBe(true);
      });
    }));
  });

});
