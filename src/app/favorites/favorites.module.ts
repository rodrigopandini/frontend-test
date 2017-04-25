import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';
import { favoritesRouting } from './favorites.routing';

const ENTRY_COMPONENTS = [
  FavoritesComponent,
];

@NgModule({
  imports: [
    SharedModule,
    favoritesRouting
  ],
  declarations: [...ENTRY_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [
    FavoritesService
  ]
})
export class FavoritesModule {}
