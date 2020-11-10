import { Component, Input, OnInit } from '@angular/core';
import {ProdutosService} from './../../services/produtos.service'
import {Produtos} from './../../models/produtos'
import {Router} from "@angular/router"

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent{
  @Input() mode : boolean//controls the buy and see buttons
  @Input() carrinho : boolean //show the + and - buttons
  @Input() produto:Produtos
  constructor(private router:Router, private produtoService: ProdutosService){

  }

  onSelect(_produto){
    this.router
    .navigate(['details'])
    .then((t)=>{
      this.produtoService.t(_produto)
    })
  }

  //save the product to purchase
  onBuy(_produto){
      this.router
      .navigate([''])
      .then((t)=>{
        this.produtoService.saveInCarrinho(_produto).subscribe(()=>{
         // this.produtoService.getCarrinho()
        })   
      })
  }

  plusProdut(produto:Produtos){
    produto.qtd += 1
    this.produtoService.updateCarrinho(produto).subscribe(()=>{
      
    })
  }

   minusProdut(produto){
     produto.qtd -= 1
     if(produto.qtd <= 0){
        this.produtoService.deleteCarrinho(produto).subscribe(()=>{

    })
     }
    this.produtoService.updateCarrinho(produto).subscribe(()=>{

    })
  }

}
