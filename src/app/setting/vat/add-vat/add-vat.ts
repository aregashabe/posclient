import {
  Component,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import {
  VatDto,
  VatService
} from '../../../services/vat.service';

@Component({
  selector: 'app-add-vat',
  standalone: true,

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './add-vat.html',
  styleUrls: ['./add-vat.scss']
})
export class AddVatComponent {

  private fb = inject(FormBuilder);
  private vatService = inject(VatService);
  private router = inject(Router);

  vatForm = this.fb.nonNullable.group({
    vatName: ['', Validators.required],
    percentage: ['', Validators.required]
  });

  saveVat(): void {

    if (this.vatForm.invalid) {
      this.vatForm.markAllAsTouched();
      return;
    }

    const vat: VatDto = this.vatForm.getRawValue();

    this.vatService.createVat(vat).subscribe({

      next: (response) => {

        console.log('VAT created:', response);

        alert('VAT added successfully');

        this.router.navigate(['/viewVat']);
      },

      error: (error) => {

        console.error('Error creating VAT:', error);

        alert('Failed to add VAT');
      }

    });
  }

  cancel(): void {
    this.router.navigate(['/viewVat']);
  }
}
