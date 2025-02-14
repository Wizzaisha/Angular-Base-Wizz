import { Route } from '@angular/router';

export const MODULE2_ROTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../components/module2-view/module2-view.component').then(
        (c) => c.Module2ViewComponent
      ),
  },
  {
    path: 'submodule1',
    loadComponent: () =>
      import('../components/submodule2-1/submodule2-1.component').then(
        (c) => c.Submodule21Component
      ),
  },
];
