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
  IngredientUnit,
  IngredientUnitDto,
  IngredientUnitService
} from '../../../services/ingredient-unit';

@Component({
  selector: 'app-view-ingredien-unit',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  templateUrl: './view-ingredien-unit.html',
  styleUrl: './view-ingredien-unit.scss'
})
export class ViewIngredienUnitComponent implements OnInit {

  private ingredientUnitService = inject(
    IngredientUnitService
  );

  dataSource = new MatTableDataSource<IngredientUnit>([]);

  displayedColumns: string[] = [
    'id',
    'unitName',
    'description',
    'actions'
  ];

  paginator = viewChild(MatPaginator);
  sort = viewChild(MatSort);

  ngOnInit(): void {
    this.loadIngredientUnits();
  }

  loadIngredientUnits(): void {

    this.ingredientUnitService
      .getIngredientUnits()
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
            'Error loading ingredient units:',
            error
          );

        }

      });

  }

  editIngredientUnit(
    unit: IngredientUnit
  ): void {

    const unitName = prompt(
      'Enter unit name:',
      unit.unitName
    );

    if (unitName === null) {
      return;
    }

    const description = prompt(
      'Enter description:',
      unit.description
    );

    if (description === null) {
      return;
    }

    const updatedUnit: IngredientUnitDto = {

      unitName: unitName,

      description: description

    };

    this.ingredientUnitService
      .updateIngredientUnit(
        unit.id,
        updatedUnit
      )
      .subscribe({

        next: () => {

          alert(
            'Ingredient unit updated successfully'
          );

          this.loadIngredientUnits();

        },

        error: (error) => {

          console.error(
            'Error updating ingredient unit:',
            error
          );

          alert(
            'Failed to update ingredient unit'
          );

        }

      });

  }

  deleteIngredientUnit(id: number): void {

    if (
      !confirm(
        'Are you sure you want to delete this ingredient unit?'
      )
    ) {
      return;
    }

    this.ingredientUnitService
      .deleteIngredientUnit(id)
      .subscribe({

        next: () => {

          alert(
            'Ingredient unit deleted successfully'
          );

          this.loadIngredientUnits();

        },

        error: (error) => {

          console.error(
            'Error deleting ingredient unit:',
            error
          );

          alert(
            'Failed to delete ingredient unit'
          );

        }

      });

  }

}