import { Route } from '@angular/router';

export const MODULE1_ROTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../components/module1-view/module1-view.component').then(
        (c) => c.Module1ViewComponent
      ),
  },
  {
    path: 'formulario-contacto',
    loadComponent: () =>
      import('../components/contact-form/contact-form.component').then(
        (c) => c.ContactFormComponent
      ),
  },
];
