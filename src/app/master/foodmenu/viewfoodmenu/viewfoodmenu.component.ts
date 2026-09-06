import {
  Component,
  inject,
  viewChild,
  effect,
  OnInit
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

import { FoodmenuService } from '../../../services/foodmenu.service';
import { Foodmenu } from '../../../models/foodmenu';

@Component({
  selector: 'app-viewfoodmenu',
  standalone: true,

  imports: [
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule
  ],

  templateUrl: './viewfoodmenu.component.html',
  styleUrl: './viewfoodmenu.component.scss',
})
export class ViewfoodmenuComponent implements OnInit {

  readonly foodmenuService = inject(FoodmenuService);

 displayedColumns = [
  'foodmenuName',
  'catagoryId',
  'salesPrice',
  'vatId',
  'photo',
  'action'
];

  dataSource = new MatTableDataSource<Foodmenu>();

  readonly paginator = viewChild.required(MatPaginator);

  readonly sort = viewChild.required(MatSort);


  constructor() {

    effect(() => {

      this.dataSource.paginator = this.paginator();

      this.dataSource.sort = this.sort();

    });

  }


  ngOnInit(): void {

    this.loadFoodmenus();

  }


  loadFoodmenus(): void {

    this.foodmenuService.getFoodmenus().subscribe({

      next: (foodmenus: Foodmenu[]) => {

        console.log('Foodmenus:', foodmenus);

        this.dataSource.data = foodmenus;

      },

      error: (error) => {

        console.error(
          'Error fetching foodmenus:',
          error
        );

      }

    });

  }
  deleteFoodmenu(id: number): void {
  if (!confirm('Are you sure you want to delete this food menu?')) {
    return;
  }

  this.foodmenuService.deleteFoodmenu(id).subscribe({
    next: () => {
      console.log('Foodmenu deleted');

      // Remove it immediately from the table
      this.dataSource.data = this.dataSource.data.filter(
        foodmenu => foodmenu.id !== id
      );
    },

    error: (error) => {
      console.error('Error deleting foodmenu:', error);
    }
  });
}

}

