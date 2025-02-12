import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'module1',
    loadComponent: () =>
      import(
        './pages/module1/components/module1-view/module1-view.component'
      ).then((c) => c.Module1ViewComponent),
  },
  {
    path: 'module2',
    loadComponent: () =>
      import(
        './pages/module2/components/module2-view/module2-view.component'
      ).then((c) => c.Module2ViewComponent),
  },
];
