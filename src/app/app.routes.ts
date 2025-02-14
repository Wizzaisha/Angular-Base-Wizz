import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './pages/module1/components/module1-view/module1-view.component'
      ).then((c) => c.Module1ViewComponent),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./pages/module2/routes/routes').then((r) => r.MODULE2_ROTES),
  },
];
