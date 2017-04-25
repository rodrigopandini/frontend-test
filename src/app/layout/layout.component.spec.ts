import {TestBed, async} from '@angular/core/testing';
import {LayoutComponent} from './layout.component';

describe('LayoutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [LayoutComponent]})
      .compileComponents();
  }));

  it('should create the layout component', async(() => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const layout = fixture.debugElement.componentInstance;
    expect(layout)
      .toBeTruthy();
  }));
});
