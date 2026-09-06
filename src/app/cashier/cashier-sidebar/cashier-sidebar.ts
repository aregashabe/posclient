import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cashier-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './cashier-sidebar.html',
  styleUrl: './cashier-sidebar.scss'
})
export class CashierSidebarComponent {

  isOpeningBalanceComplete = false;

  openMenus: { [key: string]: boolean } = {};

  toggleMenu(menu: string): void {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  isOpen(menu: string): boolean {
    return this.openMenus[menu] === true;
  }

}