import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userRole: string | null = null;

  isOpeningBalanceComplete = false;

  openingBalanceAmount = 0;

  lastOpeningBalanceDate: Date | null = null;

  // Keep track of which sidebar menus are open
  openMenus: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userrole');

    console.log('User role:', this.userRole);

    this.isOpeningBalanceComplete = false;
  }

  // Open/close a menu
  toggleMenu(menu: string): void {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  // Check whether a menu is open
  isOpen(menu: string): boolean {
    return this.openMenus[menu] === true;
  }
}