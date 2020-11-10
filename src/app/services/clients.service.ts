import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Clients} from './../models/clients'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url = 'http://localhost:3000/';
  login:BehaviorSubject<boolean>   


 constructor(private httpClients: HttpClient) {
   this.login = new BehaviorSubject<boolean> (false)
 }

  getValue(): Observable<boolean> {
    return this.login.asObservable();
  }
  setValue(newValue): void {
    this.login.next(newValue);  }

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };
 
   saveClient(client:Clients): Observable<Clients> {  
   
    return this.httpClients.post<Clients>(
      this.url+ 'clients',
      JSON.stringify(client),
      this.httpOptions
    );
  }
 
  //take all the clients
  getClients(): Observable<Clients[]> {
    return this.httpClients.get<Clients[]>(this.url + 'clients');
  }

}
