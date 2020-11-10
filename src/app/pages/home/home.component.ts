import { Component, Input} from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{ 

     
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
