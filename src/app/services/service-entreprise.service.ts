import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entreprise } from '../model/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceEntrepriseService {

  constructor(private Http:HttpClient) { }
  public listeDemande(){
    return this.Http.get<Array<entreprise>>("http://localhost:8081/entreprise/getEntreprises")
  }
  public AjoutEntreprise(file:FormData)
  {
    return this.Http.post<any>("http://localhost:8081/entreprise/AjoutEntreprise",file)
  }
  public ModifierEntreprise(file:FormData)
  {
    return this.Http.put<any>(`http://localhost:8081/entreprise/ModifierEntreprise`,file)
  }
  public ModifierEntreprise2(file:FormData)
  {
    return this.Http.put<any>(`http://localhost:8081/entreprise/ModifierEntreprise2`,file)
  }
  public SupprimerEntreprise(id:Number)
   {
    return this.Http.delete<any>("http://localhost:8081/entreprise/SupprimerEntreprise?id="+id)
   }
}
