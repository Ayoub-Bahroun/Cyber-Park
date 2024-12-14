import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formLogin!: FormGroup;
  message: any = localStorage.getItem('message')
  messagee: any;
  currentUrl: any;
  ia:any
  constructor( private fb: FormBuilder, 
    private location: Location) {

  }
  ngOnInit() {
    this.formLogin = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
      
    })
    const currentUrl = this.location.path();
    this.currentUrl = currentUrl;

  }

  
  getErrorsMessage(arg0: string, error: any): string {
    if (error['required']) {
      return arg0 + " obligatoir";
    } else if (error['email']) {
      return "email invalid"
    }
    else if (error['min']) {
      return "telephone invalid"
    }
    else if (error['max']) {
      return "telephone invalid"
    }
    else return "";
  }
  
}

