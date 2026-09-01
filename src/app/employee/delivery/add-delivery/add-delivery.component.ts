import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
    dliveryname: '',
    deliverymobile: ''
  };

  errors = {
    dliveryname: '',
    deliverymobile: ''
  };

  constructor(private router: Router) {}

  validateForm(): boolean {

    this.errors = {
      dliveryname: '',
      deliverymobile: ''
    };

    let valid = true;

    // Delivery name
    if (!this.delivery.dliveryname.trim()) {
      this.errors.dliveryname = 'Delivery Name is required';
      valid = false;
    }

    // Mobile number
    if (!this.delivery.deliverymobile.trim()) {

      this.errors.deliverymobile = 'Mobile Number is required';
      valid = false;

    } else if (!/^\d+$/.test(this.delivery.deliverymobile)) {

      this.errors.deliverymobile =
        'Only numbers are allowed in the mobile number field';

      valid = false;
    }

    return valid;
  }

  submit(): void {

    if (!this.validateForm()) {
      return;
    }

    console.log('Delivery:', this.delivery);

    // API will be connected later.
    this.router.navigate(['/viewDelivery']);
  }

}