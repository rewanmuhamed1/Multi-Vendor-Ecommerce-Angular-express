import { Routes } from '@angular/router';
import { LoginComponent } from './dashboard/auth/admin-login/login.component';
import { RegisterComponent } from './dashboard/auth/seller-register/register.component';
import { MainLayoutComponent } from './dashboard/layout/main-layout/main-layout.component';
import { SellerDashboardComponent } from './dashboard/seller/seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './dashboard/admin/orders/orders.component';
import { CategoryComponent } from './dashboard/admin/category/category.component';
import { SellerComponent } from './dashboard/admin/seller/seller.component';
import { PaymentRequestComponent } from './dashboard/admin/payment-request/payment-request.component';
import { DeactiveSellersComponent } from './dashboard/admin/deactive-sellers/deactive-sellers.component';
import { SellersRequestComponent } from './dashboard/admin/sellers-request/sellers-request.component';
import { ChatSellerComponent } from './dashboard/admin/chat-seller/chat-seller.component';
import { SellerLoginComponent } from './dashboard/auth/seller-login/seller-login.component';
import { adminLoginGuard } from './guards/admin-login.guard';
import { HomeComponent } from './dashboard/admin/home/home.component';
import { HomeComponent as HomeSeller } from './dashboard/seller/home/home.component';
import { HomeComponent as MainHome } from './dashboard/home/home.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';
import { adminDashboardGuard } from './guards/admin-dashboard.guard';
import { sellerDashboardGuard } from './guards/seller-dashboard.guard';
import { protectRoutesGuard } from './guards/protect-routes.guard';
import { AccountPendingComponent } from './dashboard/seller/account-pending/account-pending.component';
import { AddProductComponent } from './dashboard/seller/add-product/add-product.component';
import { ProductsComponent } from './dashboard/seller/products/products.component';
import { DiscountProductComponent } from './dashboard/seller/discount-product/discount-product.component';
import { PaymentsComponent } from './dashboard/seller/payments/payments.component';
import { ChatCustomerComponent } from './dashboard/seller/chat-customer/chat-customer.component';
import { ChatSupportComponent } from './dashboard/seller/chat-support/chat-support.component';
import { ProfileComponent } from './dashboard/seller/profile/profile.component';
import { AccountDeactiveComponent } from './dashboard/seller/account-deactive/account-deactive.component';

export const routes: Routes = [
  //{path:'',redirectTo:'login',pathMatch:'full'},
  { path: '', component: MainHome, pathMatch: 'full' },
  {
    path: 'admin/login',
    component: LoginComponent,
    canMatch: [adminLoginGuard],
  },
  {
    path: 'seller/register',
    component: RegisterComponent,
    canMatch: [sellerAuthGuard],
  },
  {
    path: 'seller/login',
    component: SellerLoginComponent,
    canMatch: [sellerAuthGuard],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'admin/dashboard',
        component: AdminDashboardComponent,
        canMatch: [adminDashboardGuard],
        children: [
          {
            path: '',
            component: HomeComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'orders',
            component: OrdersComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'category',
            component: CategoryComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'sellers',
            component: SellerComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'payment-request',
            component: PaymentRequestComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'deactive-sellers',
            component: DeactiveSellersComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'sellers-request',
            component: SellersRequestComponent,
            data: {
              role: 'admin',
            },
            canActivate: [protectRoutesGuard],
          },
          { path: 'chat-seller', component: ChatSellerComponent },
        ],
      },

      {
        path: 'seller/dashboard',
        component: SellerDashboardComponent,
        canMatch: [sellerDashboardGuard],

        children: [
          {
            path: '',
            component: HomeSeller,
            data: {
              role: 'seller',
              status: 'active',
            },
          },
          {
            path: 'add-product',
            component: AddProductComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'products',
            component: ProductsComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'discount-product',
            component: DiscountProductComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'orders',
            component: OrdersComponent,
            data: {
              role: 'seller',
              visibility: ['active', 'deactive'],
            },
            canActivate: [protectRoutesGuard],
          },

          {
            path: 'payments',
            component: PaymentsComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'chat-customer',
            component: ChatCustomerComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'chat-support',
            component: ChatSupportComponent,
            data: {
              role: 'seller',
              visibility: ['active', 'deactive', 'pending'],
            },
            canActivate: [protectRoutesGuard],
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: {
              role: 'seller',
              status: 'active',
            },
            canActivate: [protectRoutesGuard],
          },
        ],
      },

      {
        path: 'seller/account-pending',
        component: AccountPendingComponent,
        data: {
          ability: 'seller',
        },
        canActivate: [protectRoutesGuard],
      },
      {
        path: 'seller/account-deactive',
        component: AccountDeactiveComponent,
        data: {
          ability: 'seller',
        },
        canActivate: [protectRoutesGuard],
      },
    ],
  },
];
