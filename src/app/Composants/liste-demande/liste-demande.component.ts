import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { demande } from 'src/app/model/demande.model';
import { demandeur } from 'src/app/model/demandeur.model';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {
  demandes:Array<demande>=[];
  demandeurs:Array<demandeur>=[];
  page: number = 1
  count: number = 0
  cardSize: number = 8
  objectImage1:Array<any>=[]
  objectImage2:Array<any>=[]
  objectImage3:Array<any>=[]
  pdfSrc!: SafeResourceUrl;
constructor(private DemandeService:DemandeService,private sanitizer: DomSanitizer){}
  ngOnInit() {
    this.listeDemande()
    this.listeDemandeur()
    this.getCv()
    this.getDeplome()
    this.getlogos()
  }


listeDemande()
{
  this.DemandeService.listeDemande().subscribe({next:data=>{
    this.demandes=data
  }
  })
}
listeDemandeur()
{
  this.DemandeService.listeDemandeurs().subscribe({next:data=>{
    this.demandeurs=data
  }})
}
onCardDataChange(event: any) {
  this.page = event;
  this.listeDemande();
}
getCv()
{
  this.DemandeService.getCvs().subscribe({next:data=>{
    this.objectImage1=data
  }})
}
getDeplome()
{
  this.DemandeService.getListeDeplome().subscribe({next:data=>{
    this.objectImage2=data
  }})
}
getlogos()
{
  this.DemandeService.getlogos().subscribe({next:data=>{
    this.objectImage3=data
  }})
}
getnameCV(id: any): string | null {
  for (let i = 0; i < this.objectImage1.length; i++) {
    if (this.objectImage1[i].demandeur.id == id) {
      return this.objectImage1[i].name;
    }
  }
  return 'Null';
}
getnameDeplome(id: any): string | null {
  for (let i = 0; i < this.objectImage2.length; i++) {
    if (this.objectImage2[i].demandeur.id == id) {
      return this.objectImage2[i].name;
    }
  }
  return 'Null';
}
getlogoentreprise(id: any): string | null {
  for (let i = 0; i < this.objectImage3.length; i++) {
    if (this.objectImage3[i].demande.id == id) {
      return 'data:image/jpeg;base64,'+this.objectImage3[i].picbyte
    }
  }
  return 'Null';
}
trouvedemandeur(id: any): demandeur | null {
  let i = 0
  let trouve = false
  while (trouve == false && i<this.demandeurs.length) {
    if (this.demandeurs[i].demande.id == id) {
      trouve = true
      return this.demandeurs[i]
    }
    else {
      i++
    }
  }
  return null
}


accepterDemande(id:any){
  this.DemandeService.accepterDemande(id).subscribe({next:data=>{
    this.listeDemande()
  }})
}
refuserDemande(id:any)
{
  this.DemandeService.refuserDemande(id).subscribe({next:data=>{
    this.listeDemande()
  }})
}
}



