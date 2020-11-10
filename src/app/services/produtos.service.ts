import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  url = 'http://localhost:3000/';

  manager:boolean = false

  produto//product select to view

  totalToPay:number = 0 //total bo be paied by the consumer

  constructor(private httpProdutos: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };
 
  //take all the products
  getProdutos(): Observable<Produtos[]> {
    return this.httpProdutos.get<Produtos[]>(this.url + 'produtos');
  }

  //take all the elements on the cart
  getCarrinho(): Observable<Produtos[]> {
    return this.httpProdutos.get<Produtos[]>(this.url + 'carrinho');
  }

  saveProduto(produto: Produtos): Observable<Produtos> {
    var nome = produto.imagem  
    produto.imagem = "./../assets/images/"+nome.slice(12)
    return this.httpProdutos.post<Produtos>(
      this.url+ 'produtos',
      JSON.stringify(produto),
      this.httpOptions
    );
  }

  updateProduto(produto: Produtos): Observable<Produtos> {
    return this.httpProdutos.put<Produtos>(
      this.url + 'produtos' + '/' + produto.id,
      JSON.stringify(produto),
      this.httpOptions
    );
  }

   updateCarrinho(produto: Produtos): Observable<Produtos> {
    return this.httpProdutos.put<Produtos>(
      this.url + 'carrinho' + '/' + produto.id,
      JSON.stringify(produto),
      this.httpOptions
    );
  }

  deleteProduto(produto: Produtos): Observable<Produtos> {
    return this.httpProdutos.delete<Produtos>(
      this.url + 'produtos' + '/' + produto.id,
      this.httpOptions
    );
  }

  deleteCarrinho(produto: Produtos): Observable<Produtos> {
    return this.httpProdutos.delete<Produtos>(
      this.url + 'carrinho' + '/' + produto.id,
      this.httpOptions
    );
  }

  t (produto){
    this.produto = produto
  }

  saveInCarrinho(produto: Produtos): Observable<Produtos> { 
    console.log(produto)  
    return this.httpProdutos.post<Produtos>(
      this.url + 'carrinho',
      JSON.stringify(produto),
      this.httpOptions
    );
  }
}
