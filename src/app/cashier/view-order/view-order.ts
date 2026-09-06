import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';

import { RouterLink } from '@angular/router';

import { PosOrderService } from '../../services/pos-order.service';

@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterLink
  ],
  templateUrl: './view-order.html',
  styleUrl: './view-order.scss'
})
export class ViewOrder implements OnInit {

  private readonly posOrderService =
    inject(PosOrderService);

  dataSource = new MatTableDataSource<any>([]);

  displayedColumns = [
    'total',
    'vatAmount',
    'grandTotal',
    'paymentStatus'
  ];

  ngOnInit(): void {

    console.log('VIEW ORDER STARTED');

    this.posOrderService.getOrders().subscribe({

      next: (response) => {

        console.log('RESPONSE:', response);
        console.log('IS ARRAY:', Array.isArray(response));
        console.log('LENGTH:', response.length);

        this.dataSource.data = response;

        console.log(
          'DATASOURCE LENGTH:',
          this.dataSource.data.length
        );

      },

      error: (error) => {

        console.error('GET ORDERS ERROR:', error);

      }

    });

  }

}