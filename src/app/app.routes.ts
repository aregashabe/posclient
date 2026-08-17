import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./userPages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'viewingredientfoodcategory',
    loadComponent: () => import('./category/view-category/view-category.component').then(m => m.ViewCategoryComponent)
  },
 {
  path: 'add-user',
  canActivate: [adminGuard],
  loadComponent: () =>
    import('./userPages/add-user/add-user.component')
      .then(m => m.AddUserComponent)
},
{
path:'user-list',
canActivate: [adminGuard],
loadComponent:()=>import('./userPages/user-list/user-list.component').then(m=>m.UserListComponent)
},
{
  path:'dashboard',
  loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent)
}

];
