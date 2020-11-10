
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clients } from 'src/app/models/clients';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clients:Clients[]

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder, private clientService: ClientsService
  , private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    var clientForm : Clients = this.loginForm.value
    this.compareLogin(clientForm)
  }

  compareLogin(clientForm:Clients){
    this.clientService.getClients().subscribe((clients)=>{
      this.clients = clients
       for(var i = 0; i < this.clients.length; i++){
       if(this.clients[i].email == clientForm.email){
         if(this.clients[i].password == clientForm.password){
           this.clientService.setValue(true)
            this.router.navigate([''])
         }else{
           console.log("Password or emil are wrong")
         }
       }
       else{
           console.log("Password or emil are wrong")
         }
    }
    })
   
  }

}