import { TestBed, async } from '@angular/core/testing';

import { ViewTitleService } from '../core/view-title.service';

import { FavoritesModule } from './favorites.module';
import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FavoritesModule ],
      providers: [ ViewTitleService ]
    })
      .compileComponents();
  }));

  it('should create the favorites component', async(() => {
    const fixture = TestBed.createComponent(FavoritesComponent);
    const favorites = fixture.debugElement.componentInstance;
    expect(favorites)
      .toBeTruthy();
  }));
});
