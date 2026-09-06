
import {
  Component,
  OnInit,
  inject,
  viewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';

import {
  MatPaginatorModule,
  MatPaginator
} from '@angular/material/paginator';

import {
  MatSortModule,
  MatSort
} from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';

import { Vat, VatService } from '../../../services/vat.service';

@Component({
  selector: 'app-view-vat',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  templateUrl: './view-vat.html',
  styleUrl: './view-vat.scss'
})
export class ViewVatComponent implements OnInit {

  private vatService = inject(VatService);

  dataSource = new MatTableDataSource<Vat>([]);

  displayedColumns: string[] = [
    'id',
    'vatName',
    'percentage',
    'actions'
  ];

  paginator = viewChild(MatPaginator);
  sort = viewChild(MatSort);

  ngOnInit(): void {
    this.loadVats();
  }

  loadVats(): void {

    this.vatService.getVats().subscribe({

      next: (data) => {

        this.dataSource.data = data;

        if (this.paginator()) {
          this.dataSource.paginator = this.paginator();
        }

        if (this.sort()) {
          this.dataSource.sort = this.sort();
        }

      },

      error: (error) => {
        console.error('Error loading VATs:', error);
      }

    });

  }

  updateVat(id: number): void {
    // Implementation for updating VAT
  }

  deleteVat(id: number): void {

    if (!confirm('Are you sure you want to delete this VAT?')) {
      return;
    }

    this.vatService.deleteVat(id).subscribe({

      next: () => {

        alert('VAT deleted successfully');

        this.loadVats();

      },

      error: (error) => {

        console.error('Error deleting VAT:', error);

        alert('Failed to delete VAT');

      }

    });

  }

}

