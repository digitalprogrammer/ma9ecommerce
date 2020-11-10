import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component'

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ProdutoDetailsComponent } from './pages/produto-details/produto-details.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { ComplementosComponent } from './pages/complementos/complementos.component';
import { ManagementComponent } from './pages/management/management.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LogupComponent } from './pages/logup/logup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProdutoDetailComponent,
    ProdutoDetailsComponent,
    CarrinhoComponent,
    BebidasComponent,
    PizzasComponent,
    ComplementosComponent,
    ManagementComponent,
    LoginComponent,
    LogupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
     ReactiveFormsModule,   
    MatFormFieldModule,
    MatInputModule,   
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
