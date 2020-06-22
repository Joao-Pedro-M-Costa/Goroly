import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { AccountComponent } from './user/account/account.component';
import { ProductComponent } from './user/product/product.component';
import { CartComponent } from './user/cart/cart.component';
import { SingupPageComponent } from './user/singup-page/singup-page.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { ProdutoEditComponent } from './admin/produto-edit/produto-edit.component';


const routes: Routes = [
{path:"",component:LandPageComponent},
{path:"home",component:HomePageComponent},
{path:"singup",component:SingupPageComponent},
{path:"account",component:AccountComponent},
{path:"produto/:id",component:ProductComponent},
{path:"cart",component:CartComponent},
{path:"admin",component:AdminMainComponent},
{path:"admin/user-edit/:id",component:UserEditComponent},
{path:"admin/produto-edit/:id",component:ProdutoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
