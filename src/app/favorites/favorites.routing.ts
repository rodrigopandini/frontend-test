import { RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';

export const favoritesRouting = RouterModule.forChild([
  {
    path: '',
    component: FavoritesComponent
  }
]);
