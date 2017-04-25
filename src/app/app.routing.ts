import { ExtraOptions, RouterModule } from '@angular/router';

import { PreloadSelectedModulesOnly } from './core';

import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadSelectedModulesOnly,
  useHash: false
};

export const routing = RouterModule.forRoot([
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'movies',
        loadChildren: 'app/movies/movies.module#MoviesModule',
        data: {preload: true}
      },
      {path: 'favorites',
        loadChildren: 'app/favorites/favorites.module#FavoritesModule',
        data: {preload: false}
      },
      {path: '', component: HomeComponent}
    ]
  },
  {path: '**', component: ErrorComponent}
], routerConfig);
