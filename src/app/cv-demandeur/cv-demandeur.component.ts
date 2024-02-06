import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DemandeService } from '../services/demande.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv-demandeur',
  templateUrl: './cv-demandeur.component.html',
  styleUrls: ['./cv-demandeur.component.css']
})
export class CvDemandeurComponent {
  pdfSrc!: SafeResourceUrl;
  public id: string | null = null;
  objectImage:any

  constructor(private DemandeService:DemandeService,private sanitizer: DomSanitizer,private route: ActivatedRoute){}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCv()
  }
  getCv()
{
  this.DemandeService.getCv(this.id).subscribe({next:data=>{
    this.objectImage=data
  }})
}
trouveCV(): SafeResourceUrl {
  this.pdfSrc=this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + this.objectImage.picbyte);
    return this.pdfSrc;

}

}
