import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private authService = inject(AuthService);

  fullName = '';
  userRole = '';

  profileMenuOpen = false;

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.authService.getCurrentUser().subscribe({
      next: (user) => {

        this.fullName = `${user.firstName} ${user.lastName}`;
        this.userRole = user.role;

      },
      error: (error) => {
        console.error('Failed to load current user:', error);
      }
    });
  }

  toggleProfileMenu(): void {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  closeProfileMenu(): void {
    this.profileMenuOpen = false;
  }
}