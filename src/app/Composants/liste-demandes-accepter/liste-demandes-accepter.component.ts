import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-liste-demandes-accepter',
  templateUrl: './liste-demandes-accepter.component.html',
  styleUrls: ['./liste-demandes-accepter.component.css']
})
export class ListeDemandesAccepterComponent implements OnInit {

  page: number = 1
  count: number = 0
  cardSize: number = 8
  objectImage1: Array<any> = []
  objectImage2: Array<any> = []
  pdfSrc!: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) { }
  ngOnInit() {
    
  }
  
}
