import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cv } from 'src/app/model/cv.model';
import { entreprise } from 'src/app/model/entreprise.model';
import { DemandeService } from 'src/app/services/demande.service';
import { ServiceEntrepriseService } from 'src/app/services/service-entreprise.service';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.css']
})
export class ListeEntrepriseComponent {
  entreprises: Array<entreprise> = [];
  page: number = 1
  count: number = 0
  cardSize: number = 8
  objectImage3: Array<cv> = []
  selectedProductId!: number
  formModifierEntreprise!: FormGroup;
  SelectFilelogo!: File
  selectedId: number = undefined!;
  constructor(private fb: FormBuilder, private Entrepriseservice: ServiceEntrepriseService, private DemandeService: DemandeService) { }
  ngOnInit() {
    this.listeEntreprise()
    this.getlogos()
    this.formModifierEntreprise = this.fb.group({
      nomEntreprise: ['', Validators.required],
      gerant: ['', Validators.required],
      mailEntreprise: ['', [Validators.required]],
      service: ['', Validators.required],
      siteEntreprise: ['', Validators.required],
    });
  }
  listeEntreprise() {
    this.Entrepriseservice.listeDemande().subscribe({
      next: data => {
        this.entreprises = data
      }
    })
  }
  setSelectedId(id: number) {
    this.selectedId = id;
  }
  SupprimerEntreprise(id: Number) {
    this.Entrepriseservice.SupprimerEntreprise(id).subscribe({
      next: data => {
        this.listeEntreprise()
      }
    })
  }
  OpenModifierModal(id: number) {
    this.selectedProductId = id;
  }
  modifierEntreprise() {
    let entreprise: entreprise = this.formModifierEntreprise.value;
    const uploadData = new FormData();
    if (this.SelectFilelogo==null) {
      uploadData.append('entrepriseRequestDto', JSON.stringify(entreprise));
      uploadData.append('idEntreprise', JSON.stringify(this.selectedProductId));
      this.Entrepriseservice.ModifierEntreprise2(uploadData).subscribe({
        next: data => {
          this.listeEntreprise()
          this.getlogos()
        },
        error: error => {
          console.error('Error:', error);
        }
      });
  
    }
    else {
      uploadData.append('entrepriseRequestDto', JSON.stringify(entreprise));
      uploadData.append('idEntreprise', JSON.stringify(this.selectedProductId));
      uploadData.append('logo', this.SelectFilelogo, this.SelectFilelogo.name);
      this.Entrepriseservice.ModifierEntreprise(uploadData).subscribe({
        next: data => {
          this.listeEntreprise()
          this.getlogos()
        },
        error: error => {
          console.error('Error:', error);
        }
      });
    }
  }

  onCardDataChange(event: any) {
    this.page = event;
    this.listeEntreprise()
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
    console.log(this.objectImage3[5])
    return 'Null';
  }
  public fileChangeLogo(event: any) {
    this.SelectFilelogo = event.target.files[0]
  }
}
