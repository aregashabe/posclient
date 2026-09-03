import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DeliveryService } from '../../../services/delivery.service';

@Component({
  selector: 'app-add-delivery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './add-delivery.component.html',
  styleUrl: './add-delivery.component.scss'
})
export class AddDeliveryComponent {

  delivery = {
    deliveryName: '',
    deliveryMobile: ''
  };

  errors = {
    deliveryName: '',
    deliveryMobile: ''
  };

  isSubmitting = false;

  constructor(
    private router: Router,
    private deliveryService: DeliveryService
  ) {}

  validateForm(): boolean {

    this.errors = {
      deliveryName: '',
      deliveryMobile: ''
    };

    let valid = true;

    // Delivery name
    if (!this.delivery.deliveryName.trim()) {
      this.errors.deliveryName = 'Delivery Name is required';
      valid = false;
    }

    // Mobile number
    if (!this.delivery.deliveryMobile.trim()) {

      this.errors.deliveryMobile = 'Mobile Number is required';
      valid = false;

    } else if (!/^\d+$/.test(this.delivery.deliveryMobile)) {

      this.errors.deliveryMobile =
        'Only numbers are allowed in the mobile number field';

      valid = false;
    }

    return valid;
  }

  submit(): void {

    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;

    console.log('Sending delivery:', this.delivery);

    this.deliveryService.addDelivery(this.delivery).subscribe({

      next: (response) => {

        console.log('ADD DELIVERY RESPONSE:', response);

        this.isSubmitting = false;

        // Go back to delivery list
        this.router.navigate(['/viewDelivery']);
      },

      error: (error) => {

        console.error('ADD DELIVERY ERROR:', error);

        this.isSubmitting = false;
      }

    });
  }
}
