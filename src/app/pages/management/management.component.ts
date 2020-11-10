import { HttpClient } from '@angular/common/http';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  url ="src/assets/images"

  produto = {} as Produtos
  produtos:Produtos[]
  selectedFile
  constructor(private produtoService:ProdutosService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos(){
     this.produtoService.getProdutos().subscribe((produtos)=>{
       this.produtos = produtos
     })
  }

  saveProduct(form:NgForm){
    console.log(form.value)  
    this.produtoService.saveProduto(form.value).subscribe(()=>{      
    })
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  } 
}


