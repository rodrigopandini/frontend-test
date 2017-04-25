import { Component, OnInit } from '@angular/core';

import { ViewTitleService } from '../core/view-title.service';

import { FavoritesService } from './favorites.service';
import { Movie } from '../movies/shared/movie.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: [
    './favorites.component.scss'
  ]
})
export class FavoritesComponent implements OnInit {
  errorMessage: string;
  movies: Movie[] = [];

  constructor (private favoritesService: FavoritesService,
               viewTitle: ViewTitleService) {
    viewTitle.set('Favorites Movies');
  }

  /**
  * Make a call to getFavoritesMovies().
  */
  ngOnInit() {
    this.getFavoritesMovies();
  }

  /**
  * Get the favorites movies.
  */
  getFavoritesMovies() {
    this.favoritesService.getFavoritesMovies()
                           .subscribe(
                             movies => { this.movies = movies; },
                             error => this.errorMessage = <any>error);
  }
}
