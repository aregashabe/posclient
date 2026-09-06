import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';

import { Router } from '@angular/router';

import { FoodmenuService } from '../../services/foodmenu.service';
import { Foodmenu } from '../../models/foodmenu';
import { PosOrderService } from '../../services/pos-order.service';

@Component({
  selector: 'app-create-order',
  standalone: true,

  imports: [
    CommonModule,
    MatTableModule
  ],

  templateUrl: './create-order.html',
  styleUrl: './create-order.scss'
})
export class CreateOrder implements OnInit {

  // ================= SERVICES =================

  private readonly foodmenuService =
    inject(FoodmenuService);

  private readonly posOrderService =
    inject(PosOrderService);

  private readonly router =
    inject(Router);

  private readonly cdr =
    inject(ChangeDetectorRef);


  // ================= FOOD MENU =================

  dataSource =
    new MatTableDataSource<Foodmenu>([]);


  // ================= CURRENT ORDER =================

  orderItems: any[] = JSON.parse(
    localStorage.getItem('currentOrder') || '[]'
  );


  // ================= INIT =================

  ngOnInit(): void {

    console.log('CREATE ORDER STARTED');

    console.log('LOADING FOOD MENUS...');

    this.foodmenuService
      .getFoodmenus()
      .subscribe({

        // ================= SUCCESS =================

        next: (response) => {

          console.log(
            'FOOD MENUS FROM API:',
            response
          );

          console.log(
            'IS ARRAY:',
            Array.isArray(response)
          );

          console.log(
            'FOOD MENU COUNT:',
            response.length
          );


          // Put API data into datasource

          this.dataSource.data = response;


          // Force Angular to update UI

          this.cdr.detectChanges();


          console.log(
            'DATASOURCE COUNT:',
            this.dataSource.data.length
          );

        },


        // ================= ERROR =================

        error: (error) => {

          console.error(
            'FOOD MENU ERROR:',
            error
          );

        }

      });

  }


  // ================= ADD FOOD =================

  addToOrder(
    foodmenu: Foodmenu
  ): void {

    console.log(
      'ADDING FOOD:',
      foodmenu
    );


    const existingItem =
      this.orderItems.find(
        item =>
          item.foodMenuId === foodmenu.id
      );


    // ================= EXISTING ITEM =================

    if (existingItem) {

      existingItem.quantity++;

    }


    // ================= NEW ITEM =================

    else {

      this.orderItems.push({

        foodMenuId:
          foodmenu.id,

        foodmenuName:
          foodmenu.foodmenuName,

        salesPrice:
          Number(foodmenu.salesPrice),

        quantity:
          1

      });

    }


    // Save to localStorage

    this.saveCurrentOrder();


    console.log(
      'CURRENT ORDER:',
      this.orderItems
    );

  }


  // ================= SAVE CURRENT ORDER =================

  saveCurrentOrder(): void {

    localStorage.setItem(
      'currentOrder',
      JSON.stringify(
        this.orderItems
      )
    );

  }


  // ================= TOTAL =================

  getTotal(): number {

    return this.orderItems.reduce(

      (
        total,
        item
      ) =>

        total +
        Number(item.salesPrice) *
        Number(item.quantity),

      0

    );

  }


  // ================= VAT =================

  getVatAmount(): number {

    // VAT calculation can be added later

    return 0;

  }


  // ================= GRAND TOTAL =================

  getGrandTotal(): number {

    return (

      this.getTotal() +
      this.getVatAmount()

    );

  }


  // ================= VIEW ORDERS =================

  viewOrders(): void {

    this.router.navigate([
      '/view-orders'
    ]);

  }


  // ================= SAVE ORDER =================

  saveOrder(): void {

    // Don't save empty order

    if (
      this.orderItems.length === 0
    ) {

      alert(
        'Please add food to the order.'
      );

      return;

    }


    // ================= ORDER OBJECT =================

    const order = {

      customerId: null,

      tableId: null,

      waiterId: null,

      deliveryId: null,

      options: '',

      total:
        this.getTotal(),

      vatAmount:
        this.getVatAmount(),

      grandTotal:
        this.getGrandTotal(),

      paymentStatus:
        'Pending',

      paymentType:
        null,

      hold:
        null,

      items:

        this.orderItems.map(
          item => ({

            foodMenuId:
              item.foodMenuId,

            salesPrice:
              Number(
                item.salesPrice
              ),

            quantity:
              Number(
                item.quantity
              )

          })
        )

    };


    console.log(
      'SENDING ORDER:',
      order
    );


    // ================= API =================

    this.posOrderService
      .createOrder(order)
      .subscribe({

        // ================= SUCCESS =================

        next: (response) => {

          console.log(
            'ORDER SAVED:',
            response
          );


          alert(
            'Order saved successfully.'
          );


          // Clear current order

          this.orderItems = [];


          // Remove localStorage

          localStorage.removeItem(
            'currentOrder'
          );

        },


        // ================= ERROR =================

        error: (error) => {

          console.error(
            'STATUS:',
            error.status
          );

          console.error(
            'ERROR BODY:',
            error.error
          );

          console.error(
            'FULL ERROR:',
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