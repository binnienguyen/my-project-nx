import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  }
];
