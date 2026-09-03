import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-addcatagory',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './addcatagory.component.html',
  styleUrl: './addcatagory.component.scss',
})
export class AddcatagoryComponent {

  category = {
    categoryName: '',
    description: ''
  };

  errors = {
    categoryName: '',
    description: ''
  };

  isSubmitting = false;

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  validateForm(): boolean {

    this.errors = {
      categoryName: '',
      description: ''
    };

    let valid = true;

    if (!this.category.categoryName.trim()) {
      this.errors.categoryName = 'Category Name is required';
      valid = false;
    }

    if (!this.category.description.trim()) {
      this.errors.description = 'Description is required';
      valid = false;
    }

    return valid;
  }

  submit(): void {

    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;

    console.log('Sending category:', this.category);

    this.categoryService.addCategory(this.category).subscribe({

      next: (response) => {

        console.log('Category added successfully:', response);

        this.isSubmitting = false;

        this.router.navigate(['/viewcategory']);
      },

      error: (error) => {

        console.error('ADD CATEGORY ERROR:', error);

        this.isSubmitting = false;
      }

    });
  }
}