import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-deplome-demandeur',
  templateUrl: './deplome-demandeur.component.html',
  styleUrls: ['./deplome-demandeur.component.css']
})
export class DeplomeDemandeurComponent {
  pdfSrc!: SafeResourceUrl;
  public id: string | null = null;
  objectImage:any

  constructor(private DemandeService:DemandeService,private sanitizer: DomSanitizer,private route: ActivatedRoute){}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDeplome()
  }
  getDeplome()
{
  this.DemandeService.getDeplome(this.id).subscribe({next:data=>{
    this.objectImage=data
  }})
}
trouveDeplome(): SafeResourceUrl {
  this.pdfSrc=this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + this.objectImage.picbyte);
    return this.pdfSrc;
}
}
