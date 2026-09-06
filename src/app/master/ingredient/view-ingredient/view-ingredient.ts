import {
  Component,
  OnInit,
  inject,
  viewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';

import {
  MatPaginatorModule,
  MatPaginator
} from '@angular/material/paginator';

import {
  MatSortModule,
  MatSort
} from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';

import {
  Ingredient,
  IngredientDto,
  IngredientService
} from '../../../services/ingredient';

@Component({
  selector: 'app-view-ingredient',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  templateUrl: './view-ingredient.html',
  styleUrl: './view-ingredient.scss'
})
export class ViewIngredientComponent implements OnInit {

  private ingredientService = inject(
    IngredientService
  );

  dataSource =
    new MatTableDataSource<Ingredient>([]);

  displayedColumns: string[] = [
    'id',
    'name',
    'categoryId',
    'ingredientUnitId',
    'alertQuantity',
    'description',
    'actions'
  ];

  paginator = viewChild(MatPaginator);

  sort = viewChild(MatSort);

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {

    this.ingredientService
      .getIngredients()
      .subscribe({

        next: (data) => {

          this.dataSource.data = data;

          if (this.paginator()) {
            this.dataSource.paginator =
              this.paginator();
          }

          if (this.sort()) {
            this.dataSource.sort =
              this.sort();
          }

        },

        error: (error) => {

          console.error(
            'Error loading ingredients:',
            error
          );

        }

      });
  }

  editIngredient(
    ingredient: Ingredient
  ): void {

    const name = prompt(
      'Enter ingredient name:',
      ingredient.name
    );

    if (name === null) {
      return;
    }

    const categoryIdText = prompt(
      'Enter category ID:',
      String(ingredient.categoryId)
    );

    if (categoryIdText === null) {
      return;
    }

    const ingredientUnitIdText = prompt(
      'Enter ingredient unit ID:',
      String(ingredient.ingredientUnitId)
    );

    if (ingredientUnitIdText === null) {
      return;
    }

    const alertQuantityText = prompt(
      'Enter alert quantity:',
      String(ingredient.alertQuantity)
    );

    if (alertQuantityText === null) {
      return;
    }

    const description = prompt(
      'Enter description:',
      ingredient.description ?? ''
    );

    if (description === null) {
      return;
    }

    const updatedIngredient: IngredientDto = {

      name: name,

      categoryId: Number(categoryIdText),

      ingredientUnitId:
        Number(ingredientUnitIdText),

      alertQuantity:
        Number(alertQuantityText),

      description: description

    };

    this.ingredientService
      .updateIngredient(
        ingredient.id,
        updatedIngredient
      )
      .subscribe({

        next: () => {

         

          this.loadIngredients();

        },

        error: (error) => {

          console.error(
            'Error updating ingredient:',
            error
          );

        

        }

      });
  }

  deleteIngredient(id: number): void {

    if (
      !confirm(
        'Are you sure you want to delete this ingredient?'
      )
    ) {
      return;
    }

    this.ingredientService
      .deleteIngredient(id)
      .subscribe({

        next: () => {

          

          this.loadIngredients();

        },

        error: (error) => {

          console.error(
            'Error deleting ingredient:',
            error
          );

       

        }

      });
  }
}