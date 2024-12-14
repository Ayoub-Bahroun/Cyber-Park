import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deplome-demandeur',
  templateUrl: './deplome-demandeur.component.html',
  styleUrls: ['./deplome-demandeur.component.css']
})
export class DeplomeDemandeurComponent {
  pdfSrc!: SafeResourceUrl;
  public id: string | null = null;
  objectImage:any

  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute){}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
