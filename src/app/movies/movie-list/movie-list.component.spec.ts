import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkStubDirective } from '../../testing/router-stubs';
import { Observable } from 'rxjs'; // tslint:disable-line
import { MaterialModule } from '@angular/material';

import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

import { MovieListComponent } from './movie-list.component';

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

  getMovieByTitle(): Observable<Movie> {
    return <Observable<Movie>>Observable.from([ this.createMookMovies(1)[0]] );
  }

  getMoviesByDirector(): Observable<Movie[]> {
    return <Observable<Movie[]>>Observable.from([ this.createMookMovies(4) ]);
  }

  saveToFavorites(movie: Movie): boolean {
    return true;
  }
}

describe('MovieListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent,
        RouterLinkStubDirective
      ],
      providers: [
        { provide: MovieService, useClass: MovieServiceMock }
      ]
    });
  });

  describe('Created the component', () => {
    it('should create the component', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp).toBeTruthy();
      });
    }));

    it('should initially have no movies', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp.movies).toBeNull();
      });
    }));

    it('should initially have no errorMessage', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp.errorMessage).toBeUndefined();
      });
    }));

    it('should initially have searchType defined', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp.searchType).toBe('title');
      });
    }));

    it('should initially have types defined', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp.types.length).toBe(0);
        expect(comp.types[0].code).toBe('title');
        expect(comp.types[0].name).toBe('Title');
        expect(comp.types[1].code).toBe('director');
        expect(comp.types[1].code).toBe('Director');
      });
    }));

    it('should initially have searchControl defined', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        expect(comp.searchControl).toBe('');
      });
    }));
  });

  describe('#OnInit()', () => {
    it('should subscribe to changes in searchControl', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        comp.ngOnInit();

        expect(comp.searchControl).toBeDefined();
      });
    }));
  });

  describe('#searchMovies(name: string)', () => {
    it('should get the movies', async(() => {
      TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(MovieListComponent);
        const comp = fixture.componentInstance;

        comp.ngOnInit();

        comp.searchMovies('Title Test 0');

        expect(comp.movies.length).toBe(1);
        expect(comp.movies[0].unit).toEqual(0);
        expect(comp.movies[0].id).toEqual(0);
        expect(comp.movies[0].title).toEqual('Title Test 0');
        expect(comp.movies[0].poster).toEqual('poster-test-0.jpg');
        expect(comp.movies[0].summary).toEqual('Summary Test 0');
        expect(comp.movies[0].director).toEqual('Director Test 0');
        expect(comp.movies[0].rating).toEqual(5);
        expect(comp.movies[0].category).toEqual('Category Test 0');
        expect(comp.movies[0].year).toEqual(2000);
        expect(comp.movies[0].cast.length).toBe(3);
        expect(comp.movies[0].cast[0]).toEqual('A');
        expect(comp.movies[0].cast[1]).toEqual('B');
        expect(comp.movies[0].cast[2]).toEqual('C');
      });
    }));
  });

});
