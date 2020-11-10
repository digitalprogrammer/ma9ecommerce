import { Component, Input, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {

  mode = true //this make the description visible
  produto 
  constructor(private produtoService:ProdutosService) { }

  ngOnInit(): void {
    this.produto = this.produtoService.produto
  }

}
