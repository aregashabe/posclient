import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-delivery',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './view-delivery.component.html',
  styleUrl: './view-delivery.component.scss'
})
export class ViewDeliveryComponent {

  deliveries: any[] = [];

  deleteDelivery(id: number): void {
    console.log('Delete delivery:', id);
  }

}