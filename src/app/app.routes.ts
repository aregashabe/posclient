import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { EditDeliveryComponent }
  from './employee/delivery/edit-delivery/edit-delivery.component';
  import { CreateOrder } from './cashier/create-order/create-order';
import { CashierDashboardComponent } from './cashier/cashier-dashboard/cashier-dashboard';
import { cashierGuard } from './guards/cashier.guard';

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
        path: 'viewfoodcategory',
        loadComponent: () =>
          import('./master/foodcatagory/view-category/view-category.component')
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
   canActivate: [adminGuard],
  loadComponent: () =>
    import('./employee/waiter/view-waiter/view-waiter.component')
      .then(m => m.ViewWaiterComponent)
},
{
  path: 'addWaiter',
   canActivate: [adminGuard],
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
  canActivate: [adminGuard],
  loadComponent: () =>
    import('./employee/delivery/add-delivery/add-delivery.component')
      .then(m => m.AddDeliveryComponent)
},
{
    path: 'editDelivery/:id',
     canActivate: [adminGuard],
    component: EditDeliveryComponent
  },
  {
    path:'addfoodcategory',
    loadComponent: () =>
      import('./master/foodcatagory/addcatagory/addcatagory.component')
        .then(m => m.AddcatagoryComponent)
  },
  {
    path: 'viewfoodmenu',
    loadComponent: () =>
      import('./master/foodmenu/viewfoodmenu/viewfoodmenu.component')
        .then(m => m.ViewfoodmenuComponent)
  },
  {
    path: 'addfoodmenu',
    loadComponent: () =>
      import('./master/foodmenu/addfoodmenu/addfoodmenu.component')
        .then(m => m.AddfoodmenuComponent)
  },
  {
  path: 'create-order',
  component: CreateOrder
  
},
{
  path: 'cashier-dashboard',
  component: CashierDashboardComponent,
 
},
{
  path: 'viewVat',
  loadComponent: () =>
    import('./setting/vat/view-vat/view-vat')
      .then(m => m.ViewVatComponent)

},
{
  path:'addVat',
  loadComponent:()=>
    import('./setting/vat/add-vat/add-vat')
  .then(m=>m.AddVatComponent)
},
{
  path: 'viewTable',
  loadComponent: () =>
    import('./setting/table/view-table/view-table')
      .then(m => m.ViewTableComponent)
},
{
  path:'addTable',
  loadComponent:()=>
    import('./setting/table/add-table/add-table')
  .then(m=>m.AddTableComponent)
},
{
  path: 'viewingredientunit',
  loadComponent: () =>
    import('./master/ingredientUnit/view-ingredien-unit/view-ingredien-unit')
      .then(m => m.ViewIngredienUnitComponent)
},{
  path:'addIngredienUnit',
  loadComponent:()=>
    import('./master/ingredientUnit/add-ingredien-unit/add-ingredien-unit')
  .then(m=>m.AddIngredienUnitComponent)
},
{
  path: 'viewingredient',
  loadComponent: () =>
    import('./master/ingredient/view-ingredient/view-ingredient')
      .then(m => m.ViewIngredientComponent)
},
{
  path:'addIngredient',
  loadComponent:()=>
    import('./master/ingredient/add-ingredient/add-ingredient')
  .then(m=>m.AddIngredient)
},
{
  path: 'view-orders',
  loadComponent: () =>
    import('./cashier/view-order/view-order')
      .then(m => m.ViewOrder)
}
    ]
  }

];