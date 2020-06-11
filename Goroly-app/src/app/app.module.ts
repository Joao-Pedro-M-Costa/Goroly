import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatTabsModule,} from '@angular/material/tabs'
import{MatGridListModule} from "@angular/material/grid-list"

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
   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
