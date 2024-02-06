import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { demande } from '../model/demande.model';
import { demandeur } from '../model/demandeur.model';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private Http:HttpClient) { }
  public AddDemande(file:FormData)
  {
    return this.Http.post<any>("http://localhost:8081/Demande/ajouterDemande",file)
  }

  public listeDemande(){
    return this.Http.get<Array<demande>>("http://localhost:8081/Demande/listeDemande")
  }
  public listeDemandeAccepter(){
    return this.Http.get<Array<demande>>("http://localhost:8081/Demande/listeDemandeAccepter")
  }
  public listeDemandeurs(){
    return this.Http.get<Array<demandeur>>("http://localhost:8081/Demande/listeDemandeur")
  }

  public getCvs()
  {
    return this.Http.get<any>("http://localhost:8081/Demande/GetCvs")
  }
  public getlogos()
  {
    return this.Http.get<any>("http://localhost:8081/Demande/Getlogos")
  }

  public getCv(id:any)
  {
    return this.Http.get<any>("http://localhost:8081/Demande/GetCv?id="+id)
  }

  public getDeplome(id:any)
  {
    return this.Http.get<any>("http://localhost:8081/Demande/GetDeplome?id="+id)
  }
  public getListeDeplome()
  {
    return this.Http.get<any>("http://localhost:8081/Demande/GetDeplomes")
  }
  public accepterDemande(id:any)
  {
    return this.Http.put<any>(`http://localhost:8081/Demande/accepterdemande?id=${id}`, {})
  }
  public confermerDemande(id:any)
  {
    return this.Http.put<any>(`http://localhost:8081/Demande/confermerdemande?id=${id}`, {})
  }

  public refuserDemande(id:any)
  {
    return this.Http.put<any>(`http://localhost:8081/Demande/refuserDemande?id=${id}`, {})
  }

}
