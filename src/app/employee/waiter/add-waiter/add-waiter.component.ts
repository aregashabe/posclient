import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-waiter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './add-waiter.component.html',
  styleUrl: './add-waiter.component.scss'
})
export class AddWaiterComponent {

  waiter = {
    waitername: '',
    designation: '',
    mobile: '',
    description: ''
  };

  errors = {
    waitername: '',
    designation: '',
    mobile: ''
  };

  constructor(private router: Router) {}

  validateForm(): boolean {

    this.errors = {
      waitername: '',
      designation: '',
      mobile: ''
    };

    let valid = true;

    // Waiter name
    if (!this.waiter.waitername.trim()) {
      this.errors.waitername = 'Waiter Name is required';
      valid = false;
    }

    // Designation
    if (!this.waiter.designation.trim()) {
      this.errors.designation = 'Designation is required';
      valid = false;
    }

    // Mobile
    if (!this.waiter.mobile.trim()) {

      this.errors.mobile = 'Mobile Number is required';
      valid = false;

    } else if (!/^\d+$/.test(this.waiter.mobile)) {

      this.errors.mobile =
        'Only numbers are allowed in the mobile number field';

      valid = false;
    }

    return valid;
  }

  submit(): void {

    if (!this.validateForm()) {
      return;
    }

    console.log('Waiter:', this.waiter);

    // API will be added in the next step.
    // After successful API request:
    this.router.navigate(['/viewWaiter']);
  }

}