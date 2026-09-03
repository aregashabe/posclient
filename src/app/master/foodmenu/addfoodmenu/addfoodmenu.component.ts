import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FoodmenuService } from '../../../services/foodmenu.service';

@Component({
  selector: 'app-addfoodmenu',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './addfoodmenu.component.html',
  styleUrl: './addfoodmenu.component.scss',
})
export class AddfoodmenuComponent {
  foodmenu = {
    foodName: '',
    foodCategory: '',
    salesPrice: 0,
    vat: 0,
    photo: ''
  };
  
  errors = {
    foodName: '',
    foodCategory: '',
    salesPrice: '',
    vat: '',
    photo: ''
  };
  
  isSubmitting = false;
  constructor(
    private router: Router,
    private foodmenuService: FoodmenuService
  ) {}
  
  validateForm(): boolean {
    this.errors = {
      foodName: '',
      foodCategory: '',
      salesPrice: '',
      vat: '',
      photo: ''
    };

    let isValid = true;
    if (!this.foodmenu.foodName) {
      this.errors.foodName = 'Food name is required';
      isValid = false;
    }
    if (!this.foodmenu.foodCategory) {
      this.errors.foodCategory = 'Food category is required';
      isValid = false;
    }
    if (this.foodmenu.salesPrice <= 0) {
      this.errors.salesPrice = 'Sales price must be a positive number';
      isValid = false;
    }
    if (this.foodmenu.vat < 0) {
      this.errors.vat = 'VAT cannot be negative';
      isValid = false;
    }
    if (!this.foodmenu.photo) {
      this.errors.photo = 'Photo is required';
      isValid = false;
    }

    return isValid;

  }
  submit(): void {
    if (!this.validateForm()) {
      return;
    }
    
    this.isSubmitting = true;
    this.foodmenuService.addFoodmenu(this.foodmenu).subscribe({
      next: (response) => {
        console.log('Food menu added successfully:', response);
        this.isSubmitting = false;
        this.router.navigate(['/viewfoodmenu']);
      },
      error: (error) => {
        console.error('Error adding food menu:', error);
        this.isSubmitting = false;
      }
    });
  }
  }
