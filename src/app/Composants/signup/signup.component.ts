import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public clientForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private SignupService:SignupService,private router : Router){
    
  }
  ngOnInit() {
    this.clientForm=this.formBuilder.group({
      username:['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      email:this.formBuilder.control('',Validators.required),
      password:this.formBuilder.control('',Validators.required), 
      prenom:['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    })
    
  }
  saveClient(){
    let client:Client=this.clientForm.value
    this.SignupService.AddClient(client).subscribe({
      next : data=>{alert("Compte créé avec succès") 
      this.router.navigateByUrl("/LoginComponent")} 
          }
        )
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

