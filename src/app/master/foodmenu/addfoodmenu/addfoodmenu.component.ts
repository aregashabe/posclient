import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FoodmenuService } from '../../../services/foodmenu.service';
import { Foodmenu } from '../../../models/foodmenu';

@Component({
  selector: 'app-addfoodmenu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './addfoodmenu.component.html',
  styleUrl: './addfoodmenu.component.scss'
})
export class AddfoodmenuComponent {

  foodmenu: Foodmenu = {
    foodmenuName: '',
    catagoryId: 0,
    foodingredientId: 0,
    salesPrice: 0,
    vatId: 0,
    description: '',
    vegItem: false,
    beverage: false,
    bar: false,
    photo: ''
  };

  errors = {
    foodmenuName: '',
    catagoryId: '',
    foodingredientId: '',
    salesPrice: '',
    vatId: '',
    description: ''
  };

  isSubmitting = false;

  constructor(
    private router: Router,
    private foodmenuService: FoodmenuService
  ) {}

  validateForm(): boolean {

    this.errors = {
      foodmenuName: '',
      catagoryId: '',
      foodingredientId: '',
      salesPrice: '',
      vatId: '',
      description: ''
    };

    let isValid = true;

    // Food name
    if (!this.foodmenu.foodmenuName.trim()) {
      this.errors.foodmenuName = 'Food name is required';
      isValid = false;
    }

    // Category
    if (this.foodmenu.catagoryId <= 0) {
      this.errors.catagoryId = 'Food category is required';
      isValid = false;
    }

    // Ingredient
    if (this.foodmenu.foodingredientId <= 0) {
      this.errors.foodingredientId = 'Ingredient is required';
      isValid = false;
    }

    // Sales price
    if (this.foodmenu.salesPrice <= 0) {
      this.errors.salesPrice = 'Sales price must be greater than 0';
      isValid = false;
    }

    // VAT
    if (this.foodmenu.vatId <= 0) {
      this.errors.vatId = 'VAT is required';
      isValid = false;
    }

    return isValid;
  }

  submit(): void {

    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;

    // Send the Foodmenu object directly to the API
    this.foodmenuService.addFoodmenu(this.foodmenu).subscribe({

      next: (response) => {

        console.log(
          'Food menu added successfully:',
          response
        );

        this.isSubmitting = false;

        this.router.navigate(['/viewfoodmenu']);
      },

      error: (error) => {

        console.error(
          'Error adding food menu:',
          error
        );

        this.isSubmitting = false;
      }

    });
  }
}