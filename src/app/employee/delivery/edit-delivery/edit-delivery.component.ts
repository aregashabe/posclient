import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DeliveryService, Delivery } from '../../../services/delivery.service';

@Component({
  selector: 'app-edit-delivery',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './edit-delivery.component.html',
  styleUrl: './edit-delivery.component.scss'
})
export class EditDeliveryComponent implements OnInit {

  deliveryId!: number;
  delivery: Delivery | null = null;

  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryService,
    private router: Router
  ) {}

 ngOnInit(): void {
  this.deliveryId = Number(this.route.snapshot.paramMap.get('id'));

  console.log('Delivery ID:', this.deliveryId);

  this.loadDelivery();
}
loadDelivery(): void {
  this.deliveryService.getDelivery(this.deliveryId).subscribe({
    next: (data) => {
      console.log('DELIVERY FROM API:', data);

      this.delivery = data;
    },
    error: (error) => {
      console.error('ERROR LOADING DELIVERY:', error);
    }
  });
}
}