import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private Http:HttpClient) { }
  public AddClient(Client:Client)
   {
    return this.Http.post<Client>("http://localhost:8081/Client/AddClient",Client)
   }
}