import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadChildren: () =>
      import('./pages/module1/routes/routes').then((r) => r.MODULE1_ROTES),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./pages/module2/routes/routes').then((r) => r.MODULE2_ROTES),
  },
];
