import { Component } from '@angular/core';
import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { LandingCategoriesComponent } from '../landing-categories/landing-categories.component';

@Component({
  selector: 'app-landing-body',
  imports: [LandingHeroComponent, LandingCategoriesComponent],
  templateUrl: './landing-body.component.html',
  styleUrl: './landing-body.component.scss',
})
export class LandingBodyComponent {}
