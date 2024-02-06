import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Composants/nav-bar/nav-bar.component';
import { SlideBarComponent } from './Composants/slide-bar/slide-bar.component';
import { HomeComponent } from './Composants/home/home.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { FormulaireComponent } from './Composants/formulaire/formulaire.component';
import { LoginComponent } from './Composants/login/login.component';
import { SignupComponent } from './Composants/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptor/app-http.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './Composants/side-bar/side-bar.component';
import { AdminComponent } from './Composants/admin/admin.component';
import { AjoutEntrepriseComponent } from './Composants/ajout-entreprise/ajout-entreprise.component';
import { ListeDemandeComponent } from './Composants/liste-demande/liste-demande.component';
import { CvDemandeurComponent } from './cv-demandeur/cv-demandeur.component';
import { DeplomeDemandeurComponent } from './Composants/deplome-demandeur/deplome-demandeur.component';
import { ListeDemandesAccepterComponent } from './composants/liste-demandes-accepter/liste-demandes-accepter.component';
import { ListeEntrepriseComponent } from './Composants/liste-entreprise/liste-entreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlideBarComponent,
    HomeComponent,
    FooterComponent,
    FormulaireComponent,
    LoginComponent,
    SignupComponent,
    SideBarComponent,
    AdminComponent,
    AjoutEntrepriseComponent,
    ListeDemandeComponent,
    CvDemandeurComponent,
    DeplomeDemandeurComponent,
    ListeDemandesAccepterComponent,
    ListeEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
