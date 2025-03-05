import { Route } from '@angular/router';

export const MODULE1_ROTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../components/module1-view/module1-view.component').then(
        (c) => c.Module1ViewComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../components/landing-body/landing-body.component').then(
            (c) => c.LandingBodyComponent
          ),
      },
      {
        path: 'formulario-contacto',
        loadComponent: () =>
          import('../components/contact-form/contact-form.component').then(
            (c) => c.ContactFormComponent
          ),
        data: {
          title: 'Contactenos',
          description:
            'Contactar con XXXX pagina de prueba para obtener mas informacion',
        },
      },
    ],
    data: {
      title: 'Pagina prueba',
      description: 'Bienvenido a la pagina de prueba,',
    },
  },
];
