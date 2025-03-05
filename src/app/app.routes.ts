import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/module1/routes/routes').then((r) => r.MODULE1_ROTES),
  },
];
