import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { entreprise } from 'src/app/model/entreprise.model';

@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.css']
})
export class AjoutEntrepriseComponent implements OnInit{
  constructor(private fb: FormBuilder,private router: Router){}
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
