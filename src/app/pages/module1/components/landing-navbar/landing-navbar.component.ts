import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-landing-navbar',
  imports: [MenubarModule, NgOptimizedImage],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.scss',
})
export class LandingNavbarComponent {
  constructor(private router: Router) {}

  handleNavitageTo(urlToNavigate: string): void {
    this.router.navigateByUrl(urlToNavigate);
  }
}
