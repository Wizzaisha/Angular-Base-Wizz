import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';



@Component({
  selector: 'app-landing-navbar',
  imports: [MenubarModule],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.scss'
})
export class LandingNavbarComponent {

  constructor(
    private router: Router
  ) {}

  handleNavitageTo(): void {
    this.router.navigateByUrl("formulario-contacto")
  }

}
