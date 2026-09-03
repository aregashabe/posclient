import { Component, viewChild, effect, inject, OnInit } from '@angular/core';
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

import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-view-category',

  imports: [
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],

  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss',
})
export class ViewCategoryComponent implements OnInit {

  readonly categoryService = inject(CategoryService);

  displayedColumns = [
    'name',
    'description',
    'actions'
  ];

  dataSource = new MatTableDataSource<Category>();

  readonly paginator = viewChild.required(MatPaginator);

  readonly sort = viewChild.required(MatSort);


  constructor() {

    effect(() => {

      this.dataSource.paginator = this.paginator();

      this.dataSource.sort = this.sort();

    });

  }


  ngOnInit(): void {

    this.loadCategories();

  }


  loadCategories(): void {

    this.categoryService.getCategories().subscribe({

      next: (data) => {

        console.log('CATEGORY DATA:', data);

        this.dataSource.data = data;

      },

      error: (error) => {

        console.error('CATEGORY ERROR:', error);

      }

    });

  }

}