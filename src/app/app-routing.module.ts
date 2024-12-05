import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Composants/nav-bar/nav-bar.component';
import { SlideBarComponent } from './Composants/slide-bar/slide-bar.component';
import { HomeComponent } from './Composants/home/home.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { FormulaireComponent } from './Composants/formulaire/formulaire.component';
import { LoginComponent } from './Composants/login/login.component';
import { SignupComponent } from './Composants/signup/signup.component';
import { SideBarComponent } from './Composants/side-bar/side-bar.component';
import { AdminComponent } from './Composants/admin/admin.component';
import { AjoutEntrepriseComponent } from './Composants/ajout-entreprise/ajout-entreprise.component';
import { ListeDemandeComponent } from './Composants/liste-demande/liste-demande.component';
import { CvDemandeurComponent } from './cv-demandeur/cv-demandeur.component';
import { DeplomeDemandeurComponent } from './Composants/deplome-demandeur/deplome-demandeur.component';
import { ListeEntrepriseComponent } from './Composants/liste-entreprise/liste-entreprise.component';
import { ListeDemandesAccepterComponent } from './composants/liste-demandes-accepter/liste-demandes-accepter.component';
const routes: Routes = [
  {path:"NavBarComponent",component:NavBarComponent},
  {path:"SlideBarComponent",component:SlideBarComponent},
  {path:"",component:HomeComponent},
  {path:"FooterComponent",component:FooterComponent},
  {path:"FormulaireComponent",component:FormulaireComponent},
  {path:"LoginComponent",component:LoginComponent},
  {path:"SignupComponent",component:SignupComponent},
  {path:"SideBarComponent",component:SideBarComponent},
  {path:"AdminComponent",component:AdminComponent ,children:[{ path: 'AjoutEntrepriseComponent', component: AjoutEntrepriseComponent },
  {path:"ListeDemandeComponent",component:ListeDemandeComponent},
  {path:"CvDemandeurComponent/:id",component:CvDemandeurComponent},
  {path:"DeplomeDemandeurComponent/:id",component:DeplomeDemandeurComponent},
  {path:"ListeDemandesAccepterComponent",component:ListeDemandesAccepterComponent},
  {path:"ListeEntrepriseComponent",component:ListeEntrepriseComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
