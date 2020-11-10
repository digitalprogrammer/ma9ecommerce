import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ComplementosComponent } from './pages/complementos/complementos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogupComponent } from './pages/logup/logup.component';
import { ManagementComponent } from './pages/management/management.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { ProdutoDetailsComponent } from './pages/produto-details/produto-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'details',component:ProdutoDetailsComponent},
  {path:'carrinho',component:CarrinhoComponent},
  {path:'bebidas',component:BebidasComponent},
  {path:'pizzas',component:PizzasComponent},
  {path:'complementos',component:ComplementosComponent},
  {path:'management',component:ManagementComponent},
  {path:'login',component:LoginComponent},
  {path:'logup',component:LogupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
