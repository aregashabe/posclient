import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';

import { FoodmenuService } from '../../services/foodmenu.service';
import { Foodmenu } from '../../models/foodmenu';
import { PosOrderService } from '../../services/pos-order.service';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule
  ],
  templateUrl: './create-order.html',
  styleUrl: './create-order.scss'
})
export class CreateOrder implements OnInit {

  readonly foodmenuService =
    inject(FoodmenuService);

  readonly posOrderService =
    inject(PosOrderService);

  dataSource =
    new MatTableDataSource<Foodmenu>();

  orderItems: any[] = [];

  ngOnInit(): void {
    this.loadFoodmenus();
  }

  loadFoodmenus(): void {

    this.foodmenuService
      .getFoodmenus()
      .subscribe({

        next: (foodmenus: Foodmenu[]) => {

          console.log(
            'Foodmenus:',
            foodmenus
          );

          this.dataSource.data =
            foodmenus;

        },

        error: (error) => {

          console.error(
            'Error fetching foodmenus:',
            error
          );

        }

      });

  }


  addToOrder(foodmenu: Foodmenu): void {

    const existingItem =
      this.orderItems.find(
        item =>
          item.foodMenuId === foodmenu.id
      );

    if (existingItem) {

      existingItem.quantity++;

    } else {

      this.orderItems.push({

        foodMenuId: foodmenu.id,

        foodmenuName:
          foodmenu.foodmenuName,

        salesPrice:
          foodmenu.salesPrice,

        quantity: 1

      });

    }

    console.log(
      'Current order:',
      this.orderItems
    );

  }


  getTotal(): number {

    return this.orderItems.reduce(

      (total, item) =>
        total +
        (Number(item.salesPrice) *
        Number(item.quantity)),

      0

    );

  }


  getVatAmount(): number {

    // For now VAT is 0.
    // Later we can connect your VAT feature.

    return 0;

  }


  getGrandTotal(): number {

    return (
      this.getTotal() +
      this.getVatAmount()
    );

  }


  saveOrder(): void {

    if (this.orderItems.length === 0) {

      alert(
        'Please add food to the order.'
      );

      return;

    }


    const total =
      this.getTotal();

    const vatAmount =
      this.getVatAmount();

    const grandTotal =
      this.getGrandTotal();


    const order = {

      customerId: null,

      tableId: null,

      waiterId: null,

      deliveryId: null,

      options: '',

      total: total,

      vatAmount: vatAmount,

      grandTotal: grandTotal,

      paymentStatus: 'Pending',

      paymentType: null,

      hold: null,

      items:
        this.orderItems.map(item => ({

          foodMenuId:
            item.foodMenuId,

          salesPrice:
            Number(item.salesPrice),

          quantity:
            Number(item.quantity)

        }))

    };


    console.log(
      'Sending order:',
      order
    );


    this.posOrderService
      .createOrder(order)
      .subscribe({

        next: (response) => {

          console.log(
            'Order saved successfully:',
            response
          );

          alert(
            'Order saved successfully.'
          );

          this.orderItems = [];

        },

        error: (error) => {

          console.error(
            'Status:',
            error.status
          );

          console.error(
            'Error body:',
            error.error
          );

          console.error(
            'Full error:',
            error
          );

          alert(
            error.error?.message ||
            'Error saving order.'
          );

        }

      });

  }

}