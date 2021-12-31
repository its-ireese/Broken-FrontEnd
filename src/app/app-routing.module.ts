import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { HomeComponent } from './home/home.component';
import { StoreProductComponent } from './product/store-product/store-product.component';
import { AdminGuard } from './users/admin.guard';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: 'products', component: StoreProductComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard]},
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard]},
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard]},
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
