import {browser} from 'protractor';
import {LayoutPage} from './layout.po';

describe('Layout', () => {
  let layout: LayoutPage;

  beforeEach(() => {
    layout = new LayoutPage();
    layout.navigateTo();
  });

  describe('Navigation', () => {
    it('should have a route that links to /movies', () => {
      const movies = layout.navigation.movies;
      expect(movies.isPresent())
        .toBeTrue();
      movies.click();
      expect(browser.getCurrentUrl())
        .toEndWith('/movies');
    });
  });
});
