import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CashierSidebarComponent } from '../../cashier/cashier-sidebar/cashier-sidebar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    CashierSidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  private authService = inject(AuthService);

  userRole = '';

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (user) => {

        this.userRole = user.role?.trim().toLowerCase() ?? '';

        console.log('USER ROLE:', this.userRole);

      },

      error: (error) => {
        console.error('CURRENT USER ERROR:', error);
      }
    });

  }
}