import { Component, OnInit,inject,viewChild,effect} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  DeliveryService,
  Delivery
} from '../../../services/delivery.service';
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

@Component({
  selector: 'app-view-delivery',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './view-delivery.component.html',
  styleUrl: './view-delivery.component.scss'
})
export class ViewDeliveryComponent implements OnInit {
readonly deliveryService = inject(DeliveryService);
 displayedColumns = [
  'deliveryName',
  'deliveryMobile',
  'actions'
];

dataSource = new MatTableDataSource<Delivery>();
  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);
  constructor() {

    effect(() => {

      this.dataSource.paginator = this.paginator();
      this.dataSource.sort = this.sort();

    });

  }
  ngOnInit(): void {
    this.loadDeliveries();
  }

loadDeliveries(): void {
    this.deliveryService.getDeliveries().subscribe({
      next: (deliveries) => {
        this.dataSource.data = deliveries;
      },
      error: (error) => {
        console.error('Error fetching deliveries:', error);
      }
    });
  }
    
}