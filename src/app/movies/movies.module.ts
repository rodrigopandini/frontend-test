import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './shared/movie.service';

import { moviesRouting } from './movies.routing';

const ENTRY_COMPONENTS = [
  MoviesComponent,
  MovieListComponent,
  MovieComponent
];

@NgModule({
  imports: [
    SharedModule,
    moviesRouting
  ],
  declarations: [...ENTRY_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [
    MovieService
  ]
})
export class MoviesModule {}
