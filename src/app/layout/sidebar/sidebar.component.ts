import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private authService = inject(AuthService);

 userRole: string = '';

  isOpeningBalanceComplete = false;

  openingBalanceAmount = 0;

  lastOpeningBalanceDate: Date | null = null;

  openMenus: { [key: string]: boolean } = {};

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe({
      next: (user) => {
        this.userRole = user.role;

        console.log('User role:', this.userRole);
      },
      error: (error) => {
        console.error('Could not get current user:', error);
      }
    });

    this.isOpeningBalanceComplete = false;
  }

  toggleMenu(menu: string): void {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  isOpen(menu: string): boolean {
    return this.openMenus[menu] === true;
  }

  isAdmin(): boolean {
    return this.userRole?.toLowerCase() === 'admin';
  }

  isManager(): boolean {
    return this.userRole?.toLowerCase() === 'manager';
  }

  isCashier(): boolean {
    return this.userRole?.toLowerCase() === 'cashier';
  }

  isWaiter(): boolean {
    return this.userRole?.toLowerCase() === 'waiter';
  }

  isDelivery(): boolean {
    return this.userRole?.toLowerCase() === 'delivery';
  }

  canSeeEmployee(): boolean {
    return this.isAdmin() || this.isManager();
  }

  canSeePOS(): boolean {
    return this.isAdmin() ||
           this.isManager() ||
           this.isCashier() ||
           this.isWaiter();
  }

  canSeeOrders(): boolean {
    return this.isAdmin() ||
           this.isManager() ||
           this.isCashier() ||
           this.isWaiter() ||
           this.isDelivery();
  }

  canSeeMaster(): boolean {
    return this.isAdmin() || this.isManager();
  }

  canSeeSettings(): boolean {
    return this.isAdmin() || this.isManager();
  }

  canSeeInventory(): boolean {
    return this.isAdmin() || this.isManager();
  }

  canSeeExpense(): boolean {
    return this.isAdmin() || this.isManager();
  }

  canSeeReports(): boolean {
    return this.isAdmin() || this.isManager();
  }
}