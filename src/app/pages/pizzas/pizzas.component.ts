import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

     
   produto = {} as Produtos
   produtos: Produtos[]
   mode = false //this do not allow the card description
  
   ngOnInit(){
    this.getProdutos()
  }

  constructor(private produtosService:ProdutosService){

  } 

  getProdutos(){
    this.produtosService.getProdutos().subscribe((produto:Produtos[])=>{
      this.produtos = produto
    })
  }

}

