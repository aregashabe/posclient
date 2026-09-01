import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-waiter',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-waiter.component.html',
  styleUrl: './view-waiter.component.scss'
})
export class ViewWaiterComponent implements OnInit {

  waiters: any[] = [];

  ngOnInit(): void {
    // We will load waiters from the API here
  }

  deleteWaiter(id: number): void {
    // We will add delete API here
  }
}