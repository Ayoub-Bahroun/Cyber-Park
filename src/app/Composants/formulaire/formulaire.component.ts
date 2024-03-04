import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { demande } from 'src/app/model/demande.model';
import { demandeur } from 'src/app/model/demandeur.model';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formDemande!: FormGroup;
  formDemandeur!: FormGroup;
  currentStep: number = 1;
  SelectFileDeplme!: File
  SelectFileCv!: File
  SelectFilelogo!: File
  ia:any
  hovered: boolean = false;
  constructor(private fb: FormBuilder,private fb2: FormBuilder, private router: Router, private Http: HttpClient, private DemandeService: DemandeService,private LoginService:LoginService) { }

  ngOnInit(): void {
    this.formDemande = this.fb.group({
      nomEntreprise: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      ideeProjet: ['', Validators.required],
      mailEntreprise: ['', Validators.required, Validators.email],
      service: ['', [Validators.required]],
    });


  
    this.formDemandeur = this.fb2.group({
      nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]],
      tel: ['', [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]],
      mail: ['', Validators.required, Validators.email],

    });
    this.LoginService.ia$.subscribe(ia => {
      this.ia = ia;
    });
    console.log(this.ia)
  }
 
  saveDemande() {
      let demande: demande = this.formDemande.value;
      let demandeeur: demandeur = this.formDemandeur.value;
      const uploadData = new FormData();
      uploadData.append('diplomeFile', this.SelectFileDeplme, this.SelectFileDeplme.name);
      uploadData.append('CVFile', this.SelectFileCv, this.SelectFileCv.name);
      uploadData.append('logo', this.SelectFilelogo, this.SelectFilelogo.name);
      uploadData.append('demandeRequestDto', JSON.stringify(demande));
      uploadData.append('demandeurRequestDto', JSON.stringify(demandeeur));
      this.DemandeService.AddDemande(uploadData).subscribe({
        next: data => {
         
        },
        error: error => {
          console.error('Error:', error);
        }
      });
  }
  titre():String
  {
    if(this.ia=='false')
    {
     return "Il faut que vous soyez connecté"
    }
    else if(!this.formDemande.valid)
    {
      return "Il manque des informations"
    }
    else if(!this.formDemandeur.valid)
    {
      return "Il manque des informations"
    }
    else
    {
      return ""
    }
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    this.router.navigateByUrl("/")
  }
  public fileChangeDeplome(event: any) {
    this.SelectFileDeplme = event.target.files[0]
  }
  public fileChangeCv(event: any) {
    this.SelectFileCv = event.target.files[0]
  }
  public fileChangeLogo(event: any) {
    this.SelectFilelogo = event.target.files[0]
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