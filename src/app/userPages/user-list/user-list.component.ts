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

import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,

  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterLink
  ],

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  private userService = inject(UserService);

  // Table data source
  dataSource = new MatTableDataSource<User>([]);

  // Columns displayed in the table
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'mobile',
    'userRole'
  ];

  // Pagination
  paginator = viewChild(MatPaginator);

  // Sorting
  sort = viewChild(MatSort);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {

    this.userService.getAllUsers().subscribe({

      next: (response: User[]) => {

        console.log('Users:', response);

        this.dataSource.data = response;

        // Connect paginator
        if (this.paginator()) {
          this.dataSource.paginator = this.paginator();
        }

        // Connect sorting
        if (this.sort()) {
          this.dataSource.sort = this.sort();
        }
      },

      error: (error: any) => {
        console.error('Error loading users:', error);
      }

    });
  }
}

