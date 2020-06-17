import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatTabsModule,} from '@angular/material/tabs'
import{MatGridListModule} from "@angular/material/grid-list"
import{ MatCheckboxModule} from "@angular/material/checkbox"
import {HttpClientModule} from "@angular/common/http"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LayoutComponent } from './user/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { ProductListElementComponent } from './shared_elements/product-list-element/product-list-element.component';
import { AccountComponent } from './user/account/account.component';
import { ProductComponent } from './user/product/product.component';
import { ProductListComponent } from './shared_elements/product-list/product-list.component';
import { CartComponent } from './user/cart/cart.component';
import { SingupPageComponent } from './user/singup-page/singup-page.component';
import { AdminProdutoComponent } from './Admin/admin-produto/admin-produto.component';
import { AdminMainComponent } from './Admin/admin-main/admin-main.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { ProdutoDataTableComponent } from './Admin/produto-data-table/produto-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminSideOptionsComponent } from './Admin/admin-side-options/admin-side-options.component';
import { ApiService } from './shared_elements/api/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandPageComponent,
    LayoutComponent,
    ProductListElementComponent,
    AccountComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    SingupPageComponent,
    AdminProdutoComponent,
    AdminSideOptionsComponent,
    AdminMainComponent,
    AdminNavbarComponent,
    ProdutoDataTableComponent,
    AdminSideOptionsComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    HttpClientModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
