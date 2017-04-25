import { TestBed, async } from '@angular/core/testing';

import { MoviesModule } from './movies.module';
import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [MoviesModule]})
      .compileComponents();
  }));

  it('should create the Movies component', async(() => {
    const fixture = TestBed.createComponent(MoviesComponent);
    const movies = fixture.debugElement.componentInstance;
    expect(movies)
      .toBeTruthy();
  }));
});
