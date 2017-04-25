import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { visible } from '../../shared/animations';

import { ViewTitleService } from '../../core/view-title.service';

import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [
    './movie.component.scss'
  ],
  animations: [
    visible
  ]
})
export class MovieComponent implements OnInit {
  movie: Movie;
  errorMessage: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private viewTitle: ViewTitleService) {}

  /**
  * Make a call to getMovieByTitle() of service to get the movie
  * specify by the title param from router `movies/:title`
  */
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovieByTitle(params['title']))
      .subscribe((movie) => {
                  this.movie = movie;
                  this.viewTitle.set('Movie - ' + movie.title);
                }, error => this.errorMessage = <any>error);
  }

  /**
  * Save selected movie to favorites.
  * @param movie The movie to be saved.
  */
  saveToFavorites(movie: Movie): boolean {
    return this.movieService.saveToFavorites(movie);
  }
}
