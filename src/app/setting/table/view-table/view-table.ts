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

import {
  Table,
  TableDto,
  TableService
} from '../../../services/table.service';

@Component({
  selector: 'app-view-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  templateUrl: './view-table.html',
  styleUrl: './view-table.scss'
})
export class ViewTableComponent implements OnInit {

  private tableService = inject(TableService);

  dataSource = new MatTableDataSource<Table>([]);

  displayedColumns: string[] = [
    'id',
    'tableName',
    'position',
    'seatCapacity',
    'description',
    'actions'
  ];

  paginator = viewChild(MatPaginator);
  sort = viewChild(MatSort);

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(): void {

    this.tableService.getTables().subscribe({

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
        console.error('Error loading tables:', error);
      }

    });

  }

  editTable(table: Table): void {

    const tableName = prompt(
      'Enter table name:',
      table.tableName
    );

    if (tableName === null) {
      return;
    }

    const position = prompt(
      'Enter position:',
      table.position
    );

    if (position === null) {
      return;
    }

    const seatCapacity = prompt(
      'Enter seat capacity:',
      table.seatCapacity
    );

    if (seatCapacity === null) {
      return;
    }

    const description = prompt(
      'Enter description:',
      table.description
    );

    if (description === null) {
      return;
    }

    const updatedTable: TableDto = {
      tableName: tableName,
      position: position,
      seatCapacity: seatCapacity,
      description: description
    };

    this.tableService.updateTable(
      table.id,
      updatedTable
    ).subscribe({

      next: () => {

        alert('Table updated successfully');

        this.loadTables();

      },

      error: (error) => {

        console.error(
          'Error updating table:',
          error
        );

        console.error(
          'Backend error:',
          error.error
        );

        alert('Failed to update table');

      }

    });

  }

  deleteTable(id: number): void {

    if (!confirm('Are you sure you want to delete this table?')) {
      return;
    }

    this.tableService.deleteTable(id).subscribe({

      next: () => {

        alert('Table deleted successfully');

        this.loadTables();

      },

      error: (error) => {

        console.error(
          'Error deleting table:',
          error
        );

        alert('Failed to delete table');

      }

    });

  }

}