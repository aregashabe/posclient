import { Component, OnInit, inject, viewChild, effect } from '@angular/core';
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

import {
  WaiterService,
  Waiter
} from '../../../services/waiter.service';

@Component({
  selector: 'app-view-waiter',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],

  templateUrl: './view-waiter.component.html',
  styleUrl: './view-waiter.component.scss'
})
export class ViewWaiterComponent implements OnInit {

  readonly waiterService = inject(WaiterService);

 displayedColumns = [
  'waiterName',
  'designation',
  'mobile',
  'description',
  'actions'
];

  dataSource = new MatTableDataSource<Waiter>();

  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);

  constructor() {

    effect(() => {

      this.dataSource.paginator = this.paginator();
      this.dataSource.sort = this.sort();

    });

  }

  ngOnInit(): void {
    this.loadWaiters();
  }

  loadWaiters(): void {

    console.log('LOAD WAITERS CALLED');

    this.waiterService.getWaiters().subscribe({

      next: (data) => {

        console.log('API DATA:', data);

        this.dataSource.data = data;

      },

      error: (error) => {

        console.error('GET WAITERS ERROR:', error);

      }

    });

  }

}