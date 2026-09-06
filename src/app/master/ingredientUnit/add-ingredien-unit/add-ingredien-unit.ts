import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import {
  IngredientUnitDto,
  IngredientUnitService
} from '../../../services/ingredient-unit';

@Component({
  selector: 'app-add-ingredien-unit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-ingredien-unit.html',
  styleUrl: './add-ingredien-unit.scss'
})
export class AddIngredienUnitComponent {

  private fb = inject(FormBuilder);

  private ingredientUnitService =
    inject(IngredientUnitService);

  private router = inject(Router);


  ingredientUnitForm = this.fb.nonNullable.group({

    unitName: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ]

  });


  saveIngredientUnit(): void {

    if (this.ingredientUnitForm.invalid) {

      this.ingredientUnitForm.markAllAsTouched();

      return;
    }


    const formValue =
      this.ingredientUnitForm.getRawValue();


    const ingredientUnit: IngredientUnitDto = {

      unitName: formValue.unitName,

      description: formValue.description

    };


    console.log(
      'Sending Ingredient Unit:',
      ingredientUnit
    );


    this.ingredientUnitService
      .createIngredientUnit(ingredientUnit)
      .subscribe({

        next: (response) => {

          console.log(
            'Ingredient unit created:',
            response
          );

          alert(
            'Ingredient unit added successfully'
          );

          this.router.navigate([
            '/viewingredientunit'
          ]);

        },

        error: (error) => {

          console.error(
            'Error creating ingredient unit:',
            error
          );

          console.error(
            'Backend error:',
            error.error
          );

          alert(
            'Failed to add ingredient unit'
          );

        }

      });

  }


  cancel(): void {

    this.router.navigate([
      '/viewIngredienUnit'
    ]);

  }

}