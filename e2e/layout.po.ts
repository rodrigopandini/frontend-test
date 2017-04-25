import {browser, by, element} from 'protractor';

export class LayoutPage {
  navigation = {
    home: element(by.css('.home-route')),
    movies: element(by.css('.movies-route'))
    favorites: element(by.css('.favorites-route'))
  };
  navigateTo(): any {
    return browser.get('/');
  }
}
