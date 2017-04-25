/* tslint:disable:no-unused-variable */
import { Observable } from 'rxjs/Observable';
import { ViewTitleService } from './view-title.service';

describe('ViewTitleService', () => {
  it('should have title observable', () => {
    const service = new ViewTitleService();

    expect(typeof service.title).toBe('object');
  });

  it('should have set function', () => {
    const service = new ViewTitleService();

    expect(typeof service.set).toBe('function');
  });
});
