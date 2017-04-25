import { TestBed, async } from '@angular/core/testing';

import { ViewTitleService } from '../core/view-title.service';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      providers: [ ViewTitleService ],
      })
      .compileComponents();
  }));

  it('should create the error component', async(() => {
    const fixture = TestBed.createComponent(ErrorComponent);
    const error = fixture.debugElement.componentInstance;
    expect(error)
      .toBeTruthy();
  }));

  it('should render text in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(ErrorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Page not found.');
  }));

});
