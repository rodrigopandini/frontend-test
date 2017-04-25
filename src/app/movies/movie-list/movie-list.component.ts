import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { visible } from '../../shared/animations';

import { ViewTitleService } from '../../core/view-title.service';

import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [
    './movie-list.component.scss'
  ],
  animations: [
    visible
  ]
})
export class MovieListComponent implements OnInit {
  errorMessage: string;
  movies: Movie[] = [];

  searchType = 'title';
  types = [
    {code: 'title', name: 'Title'},
    {code: 'director', name: 'Director'}
  ];

  searchControl = new FormControl();

  constructor (private movieService: MovieService,
               viewTitle: ViewTitleService) {
    viewTitle.set('Movie List');
  }

  /**
  * Subscribe to changes in searchControl input field
  */
  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(value => {
        this.searchMovies(value);
      });
  }

  /**
  * Search for the movies.
  * @returns Returns a list of the movies.
  */
  searchMovies(name: string) {
    this.errorMessage = '';

    if (name !== '') {
      if (this.searchType === 'title') {
        this.movieService.getMovieByTitle(name)
                        .subscribe(
                          movie => { this.movies = [movie]; },
                          error => { this.errorMessage = <any>error;
                                    /* this.movies = []; */ });
      } else
      if (this.searchType === 'director') {
        this.movieService.getMoviesByDirector(name)
                        .subscribe(
                          movies => { this.movies = movies; },
                          error => { this.errorMessage = <any>error;
                                    /* this.movies = []; */ });
      }
    }
  }
}
