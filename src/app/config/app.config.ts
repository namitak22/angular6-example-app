import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    events: 'events',
    error404: '404'
  },
  endpoints: {
    //heroes: 'https://nodejs-example-app.herokuapp.com/heroes',
    heroes: 'https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ZFlNh3HgHmOiORsrLXYzOOcxpNmmHa3G'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
 // repositoryURL: 'https://github.com/ismaestro/angular6-example-app' NAKHANDE
  repositoryURL: 'https://github.com/namitak22/angular6-example-app' 
};
