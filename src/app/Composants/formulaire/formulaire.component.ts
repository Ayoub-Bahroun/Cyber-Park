import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { demande } from 'src/app/model/demande.model';
import { demandeur } from 'src/app/model/demandeur.model';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent  implements OnInit {
  formDemande!: FormGroup;
  formDemandeur!: FormGroup;
  currentStep: number = 1;
  SelectFileDeplme!:File
  SelectFileCv!:File
  SelectFilelogo!:File

  constructor(private fb: FormBuilder,private router: Router,private Http:HttpClient,private DemandeService:DemandeService) {}

  ngOnInit(): void {
    this.formDemande = this.fb.group({
      // Define your form fields and validators
      // Example:
      nomEntreprise: ['', [Validators.required]],
      ideeProjet: ['', Validators.required],
      mailEntreprise: ['', Validators.required],
      service: ['', [Validators.required]],
      // Add more fields for each step
    });



    this.formDemandeur = this.fb.group({
      // Define your form fields and validators
      // Example:
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', [Validators.required]],
      tel: ['', Validators.required],
      mail: ['', Validators.required],
      // Add more fields for each step
    });
  }
  saveDemande() {
    if(confirm("Confermez vous?"))
    {
    let demande: demande = this.formDemande.value;
    let demandeeur: demandeur = this.formDemandeur.value;
    
    const uploadData = new FormData();
    uploadData.append('diplomeFile', this.SelectFileDeplme, this.SelectFileDeplme.name);
    uploadData.append('CVFile', this.SelectFileCv, this.SelectFileCv.name);
    uploadData.append('logo', this.SelectFilelogo, this.SelectFilelogo.name);
    uploadData.append('demandeRequestDto',JSON.stringify(demande));
    uploadData.append('demandeurRequestDto',JSON.stringify(demandeeur));

  
    this.DemandeService.AddDemande(uploadData).subscribe({
      next: data => {
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }
  }
  

  // Function to move to the next step
  nextStep() {
    this.currentStep++;
  }

  // Function to move to the previous step
  prevStep() {
    this.currentStep--;
  }

  // Submit the form
  submitForm() {
      this.router.navigateByUrl("/")
  }
  public fileChangeDeplome(event:any)
  {
    this.SelectFileDeplme=event.target.files[0]
  } 
  public fileChangeCv(event:any)
  {
    this.SelectFileCv=event.target.files[0]
  }
  public fileChangeLogo(event:any)
  {
    this.SelectFilelogo=event.target.files[0]
  }
}