import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  showRecepieForm = false;
  showReceipeDashboard = true;
  showFinalRecipe = false;

  recipeName = '';
  recipeInstructions = '';

  receipeClicked() {
    this.showRecepieForm = true;
    this.showReceipeDashboard = false;
  }

  submit() {
    this.showRecepieForm = false;
    this.showFinalRecipe = true;
  }
}
