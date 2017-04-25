import {browser} from 'protractor';

describe('Pismflix App', () => {
  it('should pass sanity check', () => {
    browser.get('/');
    expect(browser.getCurrentUrl())
      .toEndWith('/');
  });
});
