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
  TableDto,
  TableService
} from '../../../services/table.service';

@Component({
  selector: 'app-add-table',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-table.html',
  styleUrl: './add-table.scss'
})
export class AddTableComponent {

  private fb = inject(FormBuilder);
  private tableService = inject(TableService);
  private router = inject(Router);

  tableForm = this.fb.nonNullable.group({

    tableName: [
      '',
      Validators.required
    ],

    position: [
      '',
      Validators.required
    ],

    seatCapacity: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ]

  });


  saveTable(): void {

    if (this.tableForm.invalid) {

      this.tableForm.markAllAsTouched();

      return;
    }

    const formValue = this.tableForm.getRawValue();

    const table: TableDto = {

      tableName: formValue.tableName,

      position: formValue.position,

      seatCapacity: String(
        formValue.seatCapacity
      ),

      description: formValue.description

    };

    console.log('Sending Table:', table);


    this.tableService.createTable(table).subscribe({

      next: (response) => {

        console.log(
          'Table created:',
          response
        );

        this.router.navigate(['/viewTable']);

      },

      error: (error) => {

        console.error(
          'Error creating table:',
          error
        );

        console.error(
          'Backend error:',
          error.error
        );

      }

    });

  }


  cancel(): void {

    this.router.navigate(['/viewTable']);

  }

}