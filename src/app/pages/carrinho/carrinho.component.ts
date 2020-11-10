import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  totalToPay :number = 0
   produto = {} as Produtos
   produtos: Produtos[]  
   carrinho = true //display the + and - buttons
  
   ngOnInit(){
    this.getCarrinho()
  }

  constructor(private produtosService:ProdutosService){

  } 

  getCarrinho(){
    this.produtosService.getCarrinho().subscribe((produto:Produtos[])=>{
      this.produtos = produto
        this.total(produto)
    })
  
  }

  total(produtos){    
    for(var produto of produtos){
        this.produtosService.totalToPay += produto.preco * produto.qtd     
    }
    this.totalToPay = this.produtosService.totalToPay
  }
}
