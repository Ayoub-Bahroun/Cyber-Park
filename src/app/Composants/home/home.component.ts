import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { cv } from 'src/app/model/cv.model';
import { entreprise } from 'src/app/model/entreprise.model';
import { DemandeService } from 'src/app/services/demande.service';
import { ServiceEntrepriseService } from 'src/app/services/service-entreprise.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  entreprises: Array<entreprise> = [];
  SelectFilelogo!: File
  objectImage3: Array<cv> = []
  constructor(private Entrepriseservice: ServiceEntrepriseService, private DemandeService: DemandeService) { }
  ngOnInit() {
    this.listeEntreprise()
    this.getlogos()
    console.log(this.entreprises)
    console.log(this.objectImage3)
  }
  listeEntreprise() {
    this.Entrepriseservice.listeDemande().subscribe({
      next: data => {
        this.entreprises = data
      }
    })
  }
  getlogos() {
    this.DemandeService.getlogos().subscribe({
      next: data => {
        this.objectImage3 = data
        console.log(this.objectImage3)
      }
    })
  }
  getlogoentreprise(id: any): string | null {
    for (let i = 0; i < this.objectImage3.length; i++) {
      if (this.objectImage3[i].entreprise.id == id) {
        return 'data:image/jpeg;base64,' + this.objectImage3[i].picbyte
      }
    }
    return 'Null';
  }
  public fileChangeLogo(event: any) {
    this.SelectFilelogo = event.target.files[0]
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,

      },
      431: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,

      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }
}
