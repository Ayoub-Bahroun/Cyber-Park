import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public clientForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router : Router){
    
  }
  ngOnInit() {
    this.clientForm=this.formBuilder.group({
      username:['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      email:this.formBuilder.control('',Validators.required),
      password:this.formBuilder.control('',Validators.required), 
      prenom:['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    })
    
  }
  
}

