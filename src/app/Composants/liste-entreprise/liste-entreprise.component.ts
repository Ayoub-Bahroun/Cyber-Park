import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cv } from 'src/app/model/cv.model';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.css']
})
export class ListeEntrepriseComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  cardSize: number = 8;
  objectImage3: Array<cv> = [];
  selectedProductId!: number;
  formModifierEntreprise!: FormGroup;
  SelectFilelogo!: File;
  selectedId: number = undefined!;

  constructor(
    private fb: FormBuilder,
    
  ) { }

  ngOnInit() {
    
    this.formModifierEntreprise = this.fb.group({
      nomEntreprise: ['', Validators.required],
      gerant: ['', Validators.required],
      mailEntreprise: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      siteEntreprise: ['', Validators.required],
    });
  }

}
