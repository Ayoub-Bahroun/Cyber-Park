import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { entreprise } from 'src/app/model/entreprise.model';
import { ServiceEntrepriseService } from 'src/app/services/service-entreprise.service';

@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.css']
})
export class AjoutEntrepriseComponent implements OnInit{
  constructor(private fb: FormBuilder,private router: Router,private Http:HttpClient,private ServiceEntrepriseService: ServiceEntrepriseService){}
  formEntreprise!: FormGroup;
  SelectFilelogo!:File
  verif=false
  ngOnInit(): void {
    this.formEntreprise = this.fb.group({
      nomEntreprise: ['', [Validators.required, Validators.pattern(/^[a-zA-Z -]*$/)]],
      gerant: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      mailEntreprise: ['', [Validators.required],Validators.email],
      service: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      siteEntreprise: ['', ],
    });
  }
  public fileChangeLogo(event:any)
  {
    this.SelectFilelogo=event.target.files[0]
  }
  SaveEntreprise() {
   
    let entreprise: entreprise = this.formEntreprise.value;
    const uploadData = new FormData();
    uploadData.append('logo', this.SelectFilelogo, this.SelectFilelogo.name);
    uploadData.append('entrepriseRequestDTO',JSON.stringify(entreprise));
    this.verif=true  
    this.ServiceEntrepriseService.AjoutEntreprise(uploadData).subscribe({
      next: data => {
        this.router.navigateByUrl("/AdminComponent/ListeEntrepriseComponent")
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }
  getErrorsMessage(arg0: string, error: any): string {
    if (error['required']) {
      return "Le champ est obligatoire";
    } else if (error['email']) {
      return "Email invalide";
    } else if (error['min'] || error['max']) {
      return "Numéro de téléphone invalide";
    } else if (error['pattern']) {
      return "Le champ est incorrect";
    } else {
      return "";
    }
  }
}
