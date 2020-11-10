import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mode = true //this do not allow the card description
  login = this.clientService.getValue()._isScalar
  manager = this.productService.manager

  constructor(private productService:ProdutosService, private clientService:ClientsService) {  }


  ngOnInit(): void {        
     this.clientService.getValue().subscribe((value) => {
      this.login = value
    });
  }    

   logout(){
    this.clientService.setValue(false)
  }

}
