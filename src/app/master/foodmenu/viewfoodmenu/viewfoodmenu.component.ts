import {
  Component,
  inject,
  viewChild,
  effect,
  OnInit
} from '@angular/core';

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
    MatSortModule
  ],

  templateUrl: './viewfoodmenu.component.html',
  styleUrl: './viewfoodmenu.component.scss',
})
export class ViewfoodmenuComponent implements OnInit {

  readonly foodmenuService = inject(FoodmenuService);

  displayedColumns = [
    'foodName',
    'foodCategory',
    'salesPrice',
    'vat',
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

}