import {TestBed, async} from '@angular/core/testing';

import { ViewTitleService } from '../core/view-title.service';
import { HomeComponent } from './home.component';

describe('ErrorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ ViewTitleService ],
      })
      .compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home)
      .toBeTruthy();
  }));

  it('should render text in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Welcome to Pismflix App!');
  }));

  it('should render text in a p tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Select one option in the menu.');
  }));

});
