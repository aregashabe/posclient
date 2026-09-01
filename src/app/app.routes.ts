import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [

  // LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./userPages/login/login.component')
        .then(m => m.LoginComponent)
  },

  // DEFAULT
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // =========================
  // MAIN APPLICATION LAYOUT
  // =========================
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout/layout.component')
        .then(m => m.LayoutComponent),

    children: [

      // DASHBOARD
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },

      // CATEGORY
      {
        path: 'viewingredientfoodcategory',
        loadComponent: () =>
          import('./category/view-category/view-category.component')
            .then(m => m.ViewCategoryComponent)
      },

      // ADD USER
      {
        path: 'add-user',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./userPages/add-user/add-user.component')
            .then(m => m.AddUserComponent)
      },

      // USER LIST
      {
        path: 'user-list',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./userPages/user-list/user-list.component')
            .then(m => m.UserListComponent)
      },
      {
  path: 'viewWaiter',
  loadComponent: () =>
    import('./employee/waiter/view-waiter/view-waiter.component')
      .then(m => m.ViewWaiterComponent)
},
{
  path: 'addWaiter',
  loadComponent: () =>
    import('./employee/waiter/add-waiter/add-waiter.component')
      .then(m => m.AddWaiterComponent)
},
{
  path: 'viewDelivery',
  loadComponent: () =>
    import('./employee/delivery/view-delivery/view-delivery.component')
      .then(m => m.ViewDeliveryComponent)
},
{
  path: 'addDelivery',
  loadComponent: () =>
    import('./employee/delivery/add-delivery/add-delivery.component')
      .then(m => m.AddDeliveryComponent)
},

    ]
  }

];