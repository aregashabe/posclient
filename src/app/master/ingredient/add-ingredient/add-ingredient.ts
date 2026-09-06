import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import {
  IngredientDto,
  IngredientService
} from '../../../services/ingredient';

@Component({
  selector: 'app-add-ingredient',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-ingredient.html',
  styleUrl: './add-ingredient.scss'
})
export class AddIngredient {

  private fb = inject(FormBuilder);

  private ingredientService =
    inject(IngredientService);

  private router = inject(Router);

  ingredientForm = this.fb.nonNullable.group({

    name: [
      '',
      Validators.required
    ],

    categoryId: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    ingredientUnitId: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    alertQuantity: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],

    description: [
      '',
      Validators.required
    ]

  });


  saveIngredient(): void {

    if (this.ingredientForm.invalid) {

      this.ingredientForm.markAllAsTouched();

      return;
    }

    const formValue =
      this.ingredientForm.getRawValue();

    const ingredient: IngredientDto = {

      name: formValue.name,

      categoryId: formValue.categoryId,

      ingredientUnitId:
        formValue.ingredientUnitId,

      alertQuantity:
        formValue.alertQuantity,

      description:
        formValue.description

    };

    console.log(
      'Sending Ingredient:',
      ingredient
    );

    this.ingredientService
      .createIngredient(ingredient)
      .subscribe({

        next: (response) => {

          console.log(
            'Ingredient created:',
            response
          );

         

          this.router.navigate([
            '/viewingredient'
          ]);

        },

        error: (error) => {

          console.error(
            'Error creating ingredient:',
            error
          );

          console.error(
            'Backend error:',
            error.error
          );

          alert(
            'Failed to add ingredient'
          );

        }

      });
  }


  cancel(): void {

    this.router.navigate([
      '/viewingredient'
    ]);

  }

}