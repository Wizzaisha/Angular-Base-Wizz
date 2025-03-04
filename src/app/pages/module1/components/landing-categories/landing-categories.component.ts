import { Component } from '@angular/core';
import { CategorieCardComponent } from "./components/categorie-card/categorie-card.component";

@Component({
  selector: 'app-landing-categories',
  imports: [CategorieCardComponent],
  templateUrl: './landing-categories.component.html',
  styleUrl: './landing-categories.component.scss'
})
export class LandingCategoriesComponent {

}
