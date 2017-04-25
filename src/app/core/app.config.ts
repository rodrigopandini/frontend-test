import { OpaqueToken } from '@angular/core';

import { IAppConfig } from './app.config.interface';

export let APP_CONFIG = new OpaqueToken('app.config');

export const AppConfig: IAppConfig = {
  apiEndpoint: 'http://netflixroulette.net/api/api.php',
  localStorageEndpoint: 'pismflix'
};
