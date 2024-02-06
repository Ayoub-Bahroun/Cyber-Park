import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { demande } from 'src/app/model/demande.model';
import { demandeur } from 'src/app/model/demandeur.model';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-liste-demandes-accepter',
  templateUrl: './liste-demandes-accepter.component.html',
  styleUrls: ['./liste-demandes-accepter.component.css']
})
export class ListeDemandesAccepterComponent implements OnInit {
  demandes: Array<demande> = [];
  demandeurs: Array<demandeur> = [];
  page: number = 1
  count: number = 0
  cardSize: number = 8
  objectImage1: Array<any> = []
  objectImage2: Array<any> = []
  pdfSrc!: SafeResourceUrl;
  constructor(private DemandeService: DemandeService, private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.listeDemandeAccepter()
    console.log(this.listeDemandeAccepter())
    this.listeDemandeur()
  }
  listeDemandeAccepter() {
    this.DemandeService.listeDemandeAccepter().subscribe({
      next: data => {
        this.demandes = data
      }
    })
  }
  onCardDataChange(event: any) {
    this.page = event;
    this.listeDemandeAccepter();
  }
  listeDemandeur()
{
  this.DemandeService.listeDemandeurs().subscribe({next:data=>{
    this.demandeurs=data
  }})
}
confermerDemande(id:any){
  this.DemandeService.confermerDemande(id).subscribe({next:data=>{
    this.listeDemandeAccepter()
  }})
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
}
