import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

export const moviesRouting = RouterModule.forChild([
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: ':title',
        component: MovieComponent
      }
    ]
  }
]);
