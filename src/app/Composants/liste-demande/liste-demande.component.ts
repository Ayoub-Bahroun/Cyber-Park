import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { demande } from 'src/app/model/demande.model';
import { demandeur } from 'src/app/model/demandeur.model';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {

  page: number = 1
  count: number = 0
  cardSize: number = 8
  objectImage1:Array<any>=[]
  objectImage2:Array<any>=[]
  objectImage3:Array<any>=[]
  pdfSrc!: SafeResourceUrl;
constructor(private sanitizer: DomSanitizer){}
  ngOnInit() {
    
  }


onCardDataChange(event: any) {
  this.page = event;
}


}



