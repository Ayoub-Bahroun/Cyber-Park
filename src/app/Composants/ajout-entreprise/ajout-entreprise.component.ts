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
      nomEntreprise: ['', Validators.required],
      gerant: ['', Validators.required],
      mailEntreprise: ['', [Validators.required]],
      service: ['', Validators.required],
      siteEntreprise: ['', Validators.required],
    });
  }
  public fileChangeLogo(event:any)
  {
    this.SelectFilelogo=event.target.files[0]
  }
  SaveEntreprise() {
    if(confirm("Confermez vous?"))
    {
      let entreprise: entreprise = this.formEntreprise.value;
    const uploadData = new FormData();
    uploadData.append('logo', this.SelectFilelogo, this.SelectFilelogo.name);
    uploadData.append('entrepriseRequestDTO',JSON.stringify(entreprise));
    this.verif=true  
    this.ServiceEntrepriseService.AjoutEntreprise(uploadData).subscribe({
      next: data => {
        
      },
      error: error => {
        console.error('Error:', error);
      }
    });
    }
    
  }
  
}
